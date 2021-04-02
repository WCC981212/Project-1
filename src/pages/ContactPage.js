import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../components/Title';

function ContactPage() {
  return (
    <div>
      <div className='title'>
        <Title title={'Contact'} span={'Contact'} />
      </div>
      <div className='ContactPage'>
        <div className='map-sect'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2020226468035!2d101.79234841530447!3d3.0404445546578387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabf19dbed96f5e7!2sInstitute%20of%20Postgraduate%20Studies%20and%20Research!5e0!3m2!1sen!2smy!4v1617249462548!5m2!1sen!2smy'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowfullScreen=''
            loading='lazy'
          ></iframe>
        </div>
        <div className='contact-sect'>
          <ContactItem
            icon={phone}
            text1={'+60 19 848 8955'}
            text2={'+60 19 848 8955'}
            title={'Phone'}
          />
          <ContactItem
            icon={email}
            text1={'wongchuiching@outlook.com'}
            text2={'wongchuiching98@gmail.com'}
            title={'Email'}
          />
          <ContactItem
            icon={location}
            text1={'Bandar Sungai Long, 43000 Kajang'}
            text2={'Selangor, Malaysia'}
            title={'Address'}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
