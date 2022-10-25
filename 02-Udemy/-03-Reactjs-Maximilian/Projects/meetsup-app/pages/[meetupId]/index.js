import MeetupDetail from '../../components/meetups/MeetupDetail';
import {MongoClinet , ObjectId} from 'mongodb'
import { Fragment } from 'react';
import Head from 'next/head'

function MeetupDetails(props) {
  return (
    <Fragment>
     <Head>
     <title>{props.meetupData.title}</title>
     <meta name='description' content={props.meetupData.description} />
   </Head> 
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.find({}, {_id:ObjectId(meetupId)}).toArray();

  return {
    props: {
      meetupData:{
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      },
    },
  };
}

export default MeetupDetails;
