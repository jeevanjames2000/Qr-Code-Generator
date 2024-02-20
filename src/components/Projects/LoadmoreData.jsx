import { Button, Card, CardContent, Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Grid container spacing={2}>
          {products && products.length
            ? products.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Card style={{ display: "grid" }}>
                    <CardContent>
                      <img src={item.thumbnail} alt={item.title} />
                      <p>{item.title}</p>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : null}
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="outlined"
            disabled={disableButton}
            onClick={() => setCount(count + 1)}
          >
            Load More Products
          </Button>
          {disableButton ? <p>You have reached 100 products</p> : null}
        </Grid>
      </Grid>
    </Grid>
  );
}
