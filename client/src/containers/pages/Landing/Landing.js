import React from 'react'
import { connect } from "react-redux";
import authActions from '../../../redux/auth/actions'
import { Link } from 'react-router-dom'

const { basicFetch } = authActions

const Landing = props => {

    const { loading, basicFetch } = props;
    console.log(`Landing page. Loading value: `,loading)

    React.useEffect(()=>{
        basicFetch()
    },[])

    return (
        <>
            <div style={{padding:'0px 20px'}}>
                <h2>Landing</h2>
                {
                    loading === true ?
                    <p>fetching data...</p>
                    :
                    <p>Hey! How are you? Click <Link to="/signup">here</Link> to sign up.</p>
                }
            </div>
        </>
    )


}

export default connect(
    state => ({
        loading: state.Auth.loading
    }),
    { basicFetch }
)(Landing)