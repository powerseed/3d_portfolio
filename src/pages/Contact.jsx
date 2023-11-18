import React, { Suspense, useRef, useState } from 'react'
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => {
    setCurrentAnimation('walk')
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    setTimeout(() => {
      setIsLoading(false);
      setForm({
        name: '',
        email: '',
        message: ''
      })
      setCurrentAnimation('idle');
      showAlert({
        show: true,
        text: 'Message sent successfully',
        type: 'success'
      })
    }, 1000);
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input type='text' name='name' className='input' placeholder='Please enter your names' required value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input type='email' name='email' className='input' placeholder='Please enter your email' required value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your message
            <textarea name='message' rows={4} className='textarea' placeholder='Please leave your message' required value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5]
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />} >
            <Fox
              currentAnimation={currentAnimation}
              position={[2, 0, 0]}
              rotation={[12.6, -0.8, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact