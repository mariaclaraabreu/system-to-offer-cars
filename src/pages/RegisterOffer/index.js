import React, { useState, useEffect } from 'react';
import firebase from '../../services/api';
import { useHistory } from 'react-router-dom';
import Header from  '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './styles.css';

const RegisterOffer = () => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
  const [year, setYear] = useState('')

  const history = useHistory()

  useEffect(() => {
    firebase
      .firestore()
      .collection('offers')
      .get()
      .catch((err) => {
        console.log(err)
      })
  }, [])

  async function handleAddOffer(e) {
    e.preventDefault()
    try {
      firebase.firestore().collection('offers').add({
        brand,
        model,
        price,
        year,
        views: 0,
      })

      history.push('/administration')
    } catch (err) {
      alert(`Erro ao cadastrar${err}`)
    }
  }

    return (
      <>
        <Header />
        <div className="container">
          <div className="content">
            <h1>Register Offer</h1>
            <form action="">
              {"Brand"}
              <Input
                placeholder="Ex: Fiat"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
               {"Model"}
               <Input
                placeholder="Ex: Beetle"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
               {"Price"}
              <Input
                placeholder='In reais'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
               {"Year"}
              <Input
                placeholder='Ex: 2005'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </form>
            <Button
              name="Add Offer"
              className="blue"
              onClick={handleAddOffer}
            />

          </div>
          
        </div>
      </>
    );
}

export default RegisterOffer;