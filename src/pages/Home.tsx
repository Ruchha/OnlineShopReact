import React, {FC} from 'react';
import { userAPI } from '../services/UserService';
import { reviewsAPI } from '../services/ReviewsService';

const Home: FC = () => {
    const {data: users, error} = userAPI.useGetAllUsersQuery(null)
    const {data: reviews1} = reviewsAPI.useGetAllReviewsQuery(null)

        //console.log(reviews?.reviews);
    return (
        <div>
          {reviews1?.reviews.map(review =>
          <div>
            <h1>{review.rating}</h1>
            <h2>{review.user.first_name}</h2>
            
            
          </div>
          )}  
        </div>
);
};

export default Home