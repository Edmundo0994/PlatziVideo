import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/Home.scss'

const API = 'http://localhost:3000/initalState'

const Home = () => {
  const initialState = useInitialState(API)
  return (
    <div className='Home'>
      <Header />
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.mylist?.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Vídeo'>
        <Carousel>
          {initialState.originals?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  )
}

export default Home
