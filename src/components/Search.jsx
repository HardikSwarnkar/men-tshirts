import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../HomePageComponents/Navbar';
import {
  getProductError,
  getProductLoading,
  getSearch,
} from '../Store/Products/actions';
import { ProductCard } from './ProductCard';
import styles from './product.module.css';
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  checkboxClasses,
} from '@mui/material';
import { Box } from '@mui/system';
import { Footer } from '../Footer/Footer';
export const Search = () => {
  let { q } = useParams();
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getProductLoading());
    if (
      q === 'Tommy Hilfiger' ||
      q === 'U.S. Polo Assn.' ||
      q == 'WROGN' ||
      q == 'HRX by Hrithik Roshan' ||
      q == 'Nautica' ||
      q == 'HERE&NOW'
    ) {
      fetch(`https://myntradb.herokuapp.com/men-t-shirts?q=${q}`)
        .then((r) => r.json())
        .then((r) => dispatch(getSearch(r)))
        .catch((e) => dispatch(getProductError(e)));
    }
  };
  let { loading, search, error } = useSelector((state) => ({
    loading: state.product.loading,
    error: state.product.error,
    search: state.product.search,
  }));
  const sorting = (val) => {
    if (val === 'high') {
      search.sort((a, b) => b.customer_rating - a.customer_rating);
      setSort('high');
    } else {
      search.sort((a, b) => a.customer_rating - b.customer_rating);

      setSort('low');
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Navbar />
      {loading ? (
        <div style={{ width: '100px', margin: 'auto' }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>something went wrong</h1>
      ) : (
        <div className={styles.body}>
          <div style={{ float: 'left' }} className={styles.upperDiv}>
            <p>
              Home/ Clothing/{' '}
              <b>
                {' '}
                {q === '' ? (
                  <b>Shirt for Men </b>
                ) : (
                  <b>T-Shirt for Men</b>
                )} / {q}
              </b>
            </p>
            {q === 'Tommy Hilfiger' ? (
              <b>shirt for Men </b>
            ) : (
              <b>T-shirt for Men </b>
            )}
          </div>
          <div
            className={styles.upperDiv2}
            style={{
              float: 'right',
            }}
          >
            <Box sx={{ minWidth: 120, height: 30 }}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sort}
                  label="Sort By"
                  onChange={(e) => sorting(e.target.value)}
                >
                  <MenuItem value={'high'}>Popularity High to Low</MenuItem>
                  <MenuItem value={'low'}>Popularity Low to High</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className={styles.filterDiv}>
            <b>FILTERS</b>

            <Button
              size="small"
              sx={{ padding: '0px', margin: '0px' }}
              onClick={(e) => {
                window.location.reload();
              }}
            >
              Clear
            </Button>
            <div className={styles.filterDiv1}>
              <div>
                <span style={{ fontWeight: '500' }}>RATING</span>
              </div>
              <div style={{ marginTop: '0.3rem' }}>
                <input
                  type="checkbox"
                  value="high"
                  onChange={(e) => sorting(e.target.value)}
                />
                <label style={{ marginLeft: '1rem' }}>HIGH</label>
              </div>
              <div style={{ marginTop: '0.3rem' }}>
                <input
                  type="checkbox"
                  value="low"
                  onChange={(e) => sorting(e.target.value)}
                />
                <label style={{ marginLeft: '1rem' }}>LOW</label>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {search.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
            <div
              style={{
                margin: '100px auto',
                width: '500px',
              }}
            >
              <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
              </Stack>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
