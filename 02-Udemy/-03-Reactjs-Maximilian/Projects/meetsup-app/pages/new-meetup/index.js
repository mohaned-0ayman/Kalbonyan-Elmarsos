// our-domain.com/new-meetup
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head'

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter()
    async function addMeetupHandler(enteredMeetupData) {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        }
      })
      const data = response.json();
      router.push('/')

  }
  return (
    <Fragment>
    <Head>
     <title>React Meetups</title>
     <meta name='description' content='Browser a huge list of highly' />
   </Head> 
  <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </Fragment>
)}

export default NewMeetupPage;