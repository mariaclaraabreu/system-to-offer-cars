import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Input, Button, List, Avatar } from 'antd'
import Header from '../../components/Header';
import Input from '../../components/Input';
import firebase from '../../services/api'
import Button from '../../components/Button'
import { List, Avatar } from 'antd';
import OfferItem from  '../../components/OfferItem';
import BeetleImg from '../../assets/beetle.jpg';
import './styles.css';


// const { Search } = Input

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
            board: doc.data().board,
            brand: doc.data().brand,
            city: doc.data().city,
            color: doc.data().color,
            km: doc.data().km,
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
          <h1>Administration</h1>
          <small>{"Search"}</small>
          <Input 
            placeholder="Search for the offer by car brand name. Ex: Fiat"
            onChange={function (e) {
              handleSearchOffer(e.target.value)
            }}
          />
          <ul>
            {filteredOffers.map(item => (
              <OfferItem 
                key={item.id}
                brand={item.brand}
                model={item.model}
                onClickEdit={() => handleYetImplemented(item.id)}
                onClickDelete={() => handleDeleteOffer(item.id)}
              >
                <button>oi</button>
              </OfferItem>
            ))}

          </ul>


          <OfferItem />


          

          <Link to='/newoffer'>
            <Button
              name="Add New Offer"
              className="blue"
              // onClick={handleAddOffer}
            />
          </Link>

        </div>
      

      </div>

      
    </>
  )
}

export default Administration
