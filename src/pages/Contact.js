import React from 'react'

function Contact() {
  return (
    <div>
      <main className='uk-flex-auto uk-section uk-flex uk-flex-row uk-flex-center'>
      <article className='uk-container uk-container-small'>
       <h1>Contact Us</h1>
        <form className='uk-form-stacked '>
        <div className='uk-margin'>
        <lable className='uk-form-horizontal'  htmlFor='name'>
               Your Name:
            </lable>
            <div className='uk-form-controls uk-inline'>
            <input className='uk-input' type='text' id='name' name='name' placeholder='Name'/>
            </div>
            </div>
            <div className='uk-margin'>
        <lable className='uk-form-horizontal'  htmlFor='phone number'>
             Phone Number:
            </lable>
            <div className='uk-form-controls uk-inline'>
            <input className='uk-input' type='text' id='phone number' name='phone number' placeholder='Phone Number'/>
            </div>
            </div>
            <div className='uk-margin'>
        <lable className='uk-form-horizontal'  htmlFor='name'>
            Your Company:
            </lable>
            <div className='uk-form-controls uk-inline'>
            <input className='uk-input' type='text' id='name' name='name' placeholder='Company Name'/>
            </div>
            </div>
        </form>
        </article>
      </main>
    </div>
  )
}

export default Contact