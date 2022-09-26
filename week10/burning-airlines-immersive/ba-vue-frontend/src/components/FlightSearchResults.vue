<template>
<div>
  <h2>Flight Search Results for {{origin }} to {{destination}}</h2>

    <div v-if="loading">
        Loading results...

    </div>
    <div v-else>
        <div v-for="flight in flights">
            <p>Flight: {{flight.flight_number}}</p>
            <p>Departure Date: {{flight.departure_date}}</p>

        </div>

    </div>

</div>
</template>



<script>

const BASE_URL = 'http://localhost:3000'; import axios from 'axios' 

export default {
    name: 'FlightSearchResults',
    props: ['origin', 'destination'], //what are the expected props for this?

    data(){
        return{
            flights: [],
            loading: true,
            error: null,
        };
    },

    async mounted(){
        //here we can do our ajax requests
        //it is the same componentDidMount()

        try {
            const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`)
            console.log('Flights', res.data);

            this.flights = res.data;
            this.loading = false

        } catch(err) {
            console.log('There has been an error trying to find those flights.', err);
            this.error = err;
            this.loading = false;
        }
    }
}
</script>

<style>

</style>