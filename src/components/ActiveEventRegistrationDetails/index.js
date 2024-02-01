import './index.css'

const registrationStatus = {
  yetToRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div>
      <img
        className="imgs"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="Yet To Register View"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="submit">Register Here</button>
    </div>
  )

  const renderAlreadyRegisteredView = () => (
    <div>
      <img
        className="img1"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div>
      <img
        className="imgs"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegistered:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderAlreadyRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="last-card">{renderActiveEventRegistrationDetails()}</div>
  )
}

export default ActiveEventRegistrationDetails
