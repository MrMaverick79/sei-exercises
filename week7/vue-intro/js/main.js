console.log('Mic check', Vue);


Vue.component('photo-info', {
    props: ['title', 'taken', 'description', 'owner'],
    template:`
     <div>
        <h3>{{ title }}</h3>
        <p> Taken: {{ taken }} by {{owner}}</p>
        <p><em> {{ taken }}</em></p>
     </div>
    `,
}); //Vue component

const app =  new Vue( {

   //Where does this Vue app attach to the DOM?

   el: '#app', //i.e attach to the div #app
   //what is the STATE of the app? 
   //i.e.  what is the colection of variables that changes as a user interacts with your app? In Vue, it is called 'data': 
    data: {
        message: 'Hello World!',
        hoverText: 'This is the Vue hover text',
        billUrl: "http://www.fillmurray.com/300/300",
        showMessage: true,
        errorStatus: 'allGood',
        queryText: '',

        todoList: [
            { text: 'Learn Vue', completed: false},
            { text: 'Finish Homework', completed: false},
            { text: 'Relax', completed: false}
        ]
        
    },

    methods: {
        changeMessage: function() {
            this.message = this.message.split("").reverse().join('');

            this.showMessage = !this.showMessage
        },

        hoverHandler: function(){
            this.message = 'hover'
        }
    } // end methods

    
} ); //new Vue