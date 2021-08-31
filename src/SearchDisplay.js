import React from 'react'
import Button from "@material-ui/core/Button";
import SearchResults from './SearchResults';
import "./SearchDisplay.css";
const SearchDisplay = () => {
    return (
        <div>
            <div className='SearchPage'>
            <div className="searchPage__info">
             <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
               
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                </div>
                <SearchResults
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                loc="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                url="https://www.smarthostels.com/hyde-park-view"
                price="£30 / night"
                total="£117 total"
                />
                <SearchResults
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                loc="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                url="https://www.britanniahotels.com/hotels/the-international-hotel"
                price="£40 / night"
                total="£157 total"
            />

            <SearchResults
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                loc="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                url="https://www.guoman.com/the-tower?utm_source=google&utm_medium=organic&utm_campaign=gmb_website_click"
                price="£35 / night"
                total="£207 total"
            />
            <SearchResults
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                loc="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                url="https://www.thezhotels.com/hotels/trafalgar"
                price="£55 / night"
                total="£320 total"
            />
            <SearchResults
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                loc="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                url="https://www.citizenm.com/hotels/europe/london/london-shoreditch-hotel"
                price="£60 / night"
                total="£450 total"
            />
            <SearchResults
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                loc="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                url="https://www.thew14hotel.co.uk/"
                price="£65 / night"
                total="£480 total"
            />
            <SearchResults
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                loc="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                url="https://thehoxton.com/london/holborn/?utm_source=google&utm_medium=local&utm_campaign=hotel-thehoxtonholborn"
                price="£90 / night"
                total="£650 total"
            />
        </div>
        </div>
    )
}

export default SearchDisplay
