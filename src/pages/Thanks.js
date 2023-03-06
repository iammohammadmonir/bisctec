import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageHero from '../components/PageHero';
import { useAppContext } from '../context/appContext';

const Thanks = () => {
  const { orders } = useAppContext();
  const data = orders.order;
  if (!data) {
    return (
      <div>
        <PageHero title='Please Request us' />
        <div className='padding-80 text-center'>
          <Link className='btn-text' to='/'>
            Bacck to home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <Wrapper>
      <PageHero title='Thanks' />
      <section className='padding-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              <div>
                <div className='order-header'>
                  <div>
                    <div>{data.projectTitle}</div>
                    <div>{data.company}</div>
                    <div>
                      {data.street}, {data.zip}, {data.city}, {data.country}
                    </div>
                  </div>
                  <div>
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                  </div>
                </div>
                <div className='order-body'>
                  <p>
                    Size: {data.width} x {data.height} =
                    {data.width * data.height}m<sup>2</sup> {data.side} side
                    &Sigma; {data.height * data.width * data.side} m<sup>2</sup>
                  </p>

                  <p>
                    Map Location: <a href={data.map}>{data.map}</a>
                  </p>
                  <p>Project Description: {data.pnote}</p>
                  <div>Special Note: {data.snote}</div>
                </div>
              </div>
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

export default Thanks;
