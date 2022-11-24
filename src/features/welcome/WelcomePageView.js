import useWelcomePage from "./UseWelcomePage"


const WelcomePageView = () => {
  const {onLogin} = useWelcomePage()
  return (
    <div onClick={onLogin}>WelcomePageView</div>
  )
}

export default WelcomePageView