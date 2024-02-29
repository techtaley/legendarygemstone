import Banner from './../components/banner/Banner'
import FeaturedProducts from '../components/featuredproducts/FeaturedProducts'
import Categories from '../components/categories/Categories'

export default function Home() {
  return (
  <div>
    <Banner />
    <FeaturedProducts type="Featured"/>
    <Categories />
    <FeaturedProducts type="Trending"/>
  </div>
  )
}