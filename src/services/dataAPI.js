

let product = {
    logo: 'adidasSmall.svg',
    title: 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'Men',
    rating: 4.9,
    numberOfRatings: '22',
    price: '12,999',
    discountedPrice: '9,999',
    discountPercentage: '30%',
    sizes: [{ type: 'Small', available: true },
    { type: 'Medium', available: true },
    { type: 'Large', available: false },
    { type: 'X Large', available: true },
    { type: 'XX Large', available: true }],
    colors: ['black.png', 'red.png'],
    similarProducts : [{
        image:'sp1.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp2.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '',
        discountedPrice: '9,999',
        discountPercentage: '',
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'UK',
            to:'Egypt',
            in:'10 Days'
        }
    },
    {
        image:'sp3.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '12,999',
        discountedPrice: '9,999',
        discountPercentage: '30%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp4.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipmentType:'local', //local,abroad
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'Egypt',
            to:'Egypt',
            in:'2 Days'
        }
    },
    {
        image:'sp1.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp2.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '',
        discountedPrice: '9,999',
        discountPercentage: '',
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'UK',
            to:'Egypt',
            in:'10 Days'
        }
    },
    {
        image:'sp3.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '12,999',
        discountedPrice: '9,999',
        discountPercentage: '30%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp4.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipmentType:'local', //local,abroad
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'Egypt',
            to:'Egypt',
            in:'2 Days'
        }
    }
    
    
    ],

    images : ['p1.png', 'p2.png', 'p3.png', 'p4.png']


}




export const getProduct = ()=>{
    return product;
}