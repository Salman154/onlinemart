import React, { useState } from 'react';
import CommoSection from '../components/UI/CommoSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import "../styles/shop.css";

import products from '../assets/data/products';
import ProductsLists from '../components/UI/ProductsList';

const Shop = () => {

  const [ productsData, setProcuctsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if(filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProcuctsData(filteredProducts);
    }

    if(filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProcuctsData(filteredProducts);
    }

    if(filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProcuctsData(filteredProducts);
    }

    if(filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProcuctsData(filteredProducts);
    }

    if(filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProcuctsData(filteredProducts);
    }
    
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName
      .toLowerCase().includes(searchTerm.toLowerCase()))

      setProcuctsData(searchedProducts)
  }
  return (
    <Helmet title="Shop">
      <CommoSection title="Products" />

      <section className="filter">
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">sofa</option>
                  <option value="mobile">mobile</option>
                  <option value="chair">chair</option>
                  <option value="watch">watch</option>
                  <option value="wireless">wireless</option>
                </select>
              </div>
            </Col>

            <Col lg='3' md='6' className="text-end">
            <div className="filter__widget" >
                <select>
                  <option>Sort By Category</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='12'>
              <div className="search__box">
                <input 
                  type="text" 
                  placeholder="Search....."
                  onChange={handleSearch}
                />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (<h1 className="text-center fs-2 mb-4">No products are found!</h1>)
              : (<ProductsLists data={productsData} />)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;