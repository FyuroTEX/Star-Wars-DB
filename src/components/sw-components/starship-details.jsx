import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';


const StarshipDetails = ({ itemId }) => {
    return (

        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={swapiService.getStarship}
                            getImageUrl={swapiService.getStarshipImage} >

                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>

    );
};
export default StarshipDetails;