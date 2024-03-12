const email = {
  subject: "Hi",
  body: "Hey, How you doing Reza?%0AI loved your website.%0AAnd I want to talk with you about a job opportunity.",
};

function Header() {
  return (
    <header className='flex justify-between py-32'>
      <div>
        My name is <span className='text-white'>Reza</span>, a good{" "}
        <span className='text-white'>Full Stack Developer</span>
      </div>
      <div className='flex gap-4 cursor-pointer'>
        <a
          href={`mailto:attarzadeh76@gmail.com?subject=${email.subject}&body=${email.body}`}
          className='text-white hover:underline cursor-pointer font-bold'
        >
          Say Hi!
        </a>
        <div className='hover:text-white'>Skills</div>
        <div className='hover:text-white'>Contact</div>
      </div>
    </header>
  );
}

export default Header;
