import React, { useEffect, useState } from 'react'
import firebase from '../../services/api'
import Header from '../../components/Header';
import ImgLogo from '../../assets/logo.png';
import CardOffer from  '../../components/CardOffer';
import ImgPattern from '../../assets/img-pattern.png'
import './styles.css'

const Offers = () => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('offers')
      .onSnapshot((snapshot) => {
        setOffers(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              brand: doc.data().brand,
              model: doc.data().model,
              price: doc.data().price,
              year: doc.data().year,
              views: doc.data().views,
            }
          })
        )
      })
  }, [])

  async function handleAddViews(id) {
    const ref = firebase.firestore().collection('offers').doc(id)

    const offer = await ref.get()
    if (offer.data() !== undefined && offer.data() !== null) {
      const viewNumber = offer?.data()?.views + 1
      offer.ref.update({
        views: viewNumber,
      })
    }
  }

  return (
    <>
        <Header 
          linkHome="/"
          logo={ImgLogo}
          logoAlt="Offers Cars"
          nameLinkOne="Offers"
          nameLinkTwo="Administration"
        />
        <div className="container">
          <div className="content">
            <h1>Offers</h1>
            {offers.map((offer) => (
              <a href="/" onClick={() => handleAddViews(offer.id)}>
                <CardOffer 
                  image={ImgPattern}
                  altImage="Pattern"
                  key={offer.id}
                  model={offer.model}
                  brand={offer.brand}
                  price={offer.price}
                  year={offer.year}
                  views={offer.views}
                />
              </a>
            ))}
          </div>
          
        </div>
      </>
  )
}

export default Offers
