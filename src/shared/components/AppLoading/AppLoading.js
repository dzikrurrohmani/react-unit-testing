import './AppLoading.css';
import Lottie from 'react-lottie-player';
import animation from './AppLoading.json'

const AppLoading = ({label}) => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop-content'>
                <Lottie animationData={animation} loop={true} style={{width:'100px',height:'100px'}}/>
                {label}
            </div>
        </div>
    )
}
export default AppLoading;
