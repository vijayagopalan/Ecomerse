import React from 'react';
import PropTypes from 'prop-types';
import { halfStar, fullStar, Star } from './Icons';

const Rating = ({ rating, numReviews }) => {
    let ratingOutput = [];
    const ratingCount = (rate) => {
        let i = 1;
        while (i <= 5) {
            if (i <= rate) {
                ratingOutput.push(fullStar(i));
            }
            else if (i == Math.round(rate)) {
                ratingOutput.push(halfStar(i));
            }
            else {
                ratingOutput.push(Star(i));
            }
            i++;
        }
        return ratingOutput;
    }
    return (
        <div className='rating'>
            <span>
                {ratingCount(rating)}
            </span>
            <span>  {numReviews}  Reviews</span>
        </div>
    );
};
Rating.propTypes = {
    rating: PropTypes.any,
    numReviews: PropTypes.any
}
export default Rating;