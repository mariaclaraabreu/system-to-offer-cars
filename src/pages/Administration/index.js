import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Input, Button, List, Avatar } from 'antd'
import Header from '../../components/Header';
import Input from '../../components/Input';
import firebase from '../../services/api'
import Button from '../../components/Button'
import OfferItem from  '../../components/OfferItem';
import './styles.css';

const Administration = () => {
  const [offers, setOffers] = useState([])
  const [filteredOffers, setFilteredOffers] = useState([])

  async function handleDeleteOffer(id) {
    firebase
      .firestore()
      .collection('offers')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!')

        setOffers(offers.filter((offer) => offer.id !== id))
      })
      .catch((error) => {
        console.error('Error removing document: ', error)
      })
  }

  async function handleYetImplemented() {
    alert('Ops! Sorry, but we havent implemented this functionality yet')
  }

  async function handleSearchOffer(search) {
    if (search.length === 0) {
      setFilteredOffers(offers)
    } else {
      setFilteredOffers(offers.filter((offer) => offer.brand.includes(search)))
    }
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('offers')
      .onSnapshot((snapshot) => {
        const offersList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            brand: doc.data().brand,
            model: doc.data().model,
            price: doc.data().price,
            year: doc.data().year,
            views: doc.data().views,
          }
        })
        setOffers(offersList)
        setFilteredOffers(offersList)
      })
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <h1 className="title-adm">Adm</h1>
          <small>{"Search"}</small>
          <Input 
            placeholder="Search for the offer by car brand name. Ex: Fiat"
            onChange={function (e) {
              handleSearchOffer(e.target.value)
            }}
          />
          <ul className="list-items">
            {filteredOffers.map(item => (
              <OfferItem 
                key={item.id}
                brand={item.brand}
                model={item.model}
                onClickEdit={() => handleYetImplemented(item.id)}
                onClickDelete={() => handleDeleteOffer(item.id)}
              >
              </OfferItem>
            ))}
          </ul>

          <Link to='/newoffer'>
            <Button
              name="Add New Offer"
              className="blue"
            />
          </Link>

        </div>
      

      </div>

      
    </>
  )
}

export default Administration
