import { useEffect } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading';
import PageHero from '../components/PageHero';
import { useAppContext } from '../context/appContext';

const Order = () => {
  const { isLoading, isError, orders, fetchOrders } = useAppContext();
  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <Wrapper>
      <PageHero title='Orders' />
      <section className='padding-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              {orders.map((item) => {
                const {
                  _id,
                  projectTitle,
                  width,
                  height,
                  side,
                  map,
                  pnote,
                  name,
                  company,
                  email,
                  phone,
                  street,
                  zip,
                  city,
                  country,
                  snote,
                } = item;
                return (
                  <div key={_id}>
                    <div className='order-header'>
                      <div>
                        <div>{_id}</div>
                        <div>{projectTitle}</div>
                        <div>{company}</div>
                        <div>
                          {street}, {zip}, {city}, {country}
                        </div>
                      </div>
                      <div>
                        <div>{name}</div>
                        <div>{email}</div>
                        <div>{phone}</div>
                      </div>
                    </div>
                    <div className='order-body'>
                      <p>
                        Size: {width} x {height} = {width * height}m<sup>2</sup>{' '}
                        {side} side &Sigma; {height * width * side} m
                        <sup>2</sup>
                      </p>

                      <p>
                        Map Location: <a href={map}>{map}</a>
                      </p>
                      <p>Project Description: {pnote}</p>
                      <div>Special Note: {snote}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .order-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .order-body {
    border: 1px solid #ddd;
    padding: 20px;
    border-top: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-bottom: 20px;
    a {
      color: var(--color-red) !important;
    }
  }
`;

export default Order;
