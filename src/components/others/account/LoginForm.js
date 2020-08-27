import React, {useState}from 'react'
import SectionTitle from '../../../components/common/SectionTitle'
import {FaRegEnvelope} from 'react-icons/fa'
import {FiLock} from 'react-icons/fi'
import {Link} from 'react-router-dom'



export const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <div className="login-form">
        <div className="user-form">
          <SectionTitle title="Entrar na sua conta." subtitle="Login Account"/>
          <div className="contact-form-action mt-4">
            <form
              onSubmit={(e) => handleSignIn( e )}
              method="post">
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-box">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail( e.target.value )}
                      />
                      <FaRegEnvelope className="input-icon"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword( e.target.value )}
                      />
                      <FiLock className="input-icon"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                      <div>
                        <Link to="/recover-pass" className="text-color-2 font-weight-medium ">Esqueci-me do
                          password?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="btn-box">
                    <div className="form-group text-center mb-0">
                      <button className="template-btn border-0 w-100" type="submit">ENTRAR</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

