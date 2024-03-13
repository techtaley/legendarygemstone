import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Wishlist() {
    const { favorites } = useSelector(state => state.favorite)
    const dispatch = useDispatch()


  return (
    <div>Wishlist</div>
  )
}
