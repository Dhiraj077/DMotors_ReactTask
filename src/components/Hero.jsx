import React from 'react'
import  Typed  from "react-typed";
import backgroundImage from '../images/img_1.jpg';

const Hero = () => {
    return (
        <div className='text-white'>

<div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
       <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Custom Bike Builder</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Make Your Bike Truly Yours</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>The Ride for</p>
                    <Typed strings={['Lifetime', 'Comfort', 'Style', 'Passion']} typeSpeed={80} backSpeed={100} loop />
                </div>
            </div>
    </div>

{/* <div style="background-image: url(../images/img_1.jpg)" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae aperiam odio itaque a ab sunt recusandae ipsam aspernatur, nesciunt adipisci velit voluptatum aliquam temporibus asperiores, ratione nisi quibusdam harum eveniet quasi iusto dolores ipsa vel doloremque? Molestias aspernatur laborum culpa animi! Illum fuga assumenda ipsa placeat, architecto consectetur cum provident temporibus, ullam quisquam soluta blanditiis aliquam velit exercitationem quidem molestias laboriosam accusantium a tenetur nobis cumque molestiae. Perspiciatis et reiciendis explicabo harum culpa cupiditate a dolorem, quisquam voluptatibus! Culpa aliquid illum reiciendis hic maxime soluta iure distinctio placeat reprehenderit facilis eveniet perferendis autem quo nesciunt nostrum ut consequatur, cum harum minima enim perspiciatis quibusdam ipsam nisi? Enim tenetur dolores expedita minus, ipsam earum exercitationem, corporis dolor labore temporibus omnis ullam libero atque eos. Necessitatibus nihil cumque maxime? Unde eum iure accusamus vitae voluptatibus suscipit exercitationem delectus nostrum, voluptatum inventore aut sit reiciendis repellat architecto aperiam nam fugiat quod, corporis eius voluptatem saepe veritatis hic. Distinctio cupiditate magnam eos exercitationem iusto suscipit odit explicabo odio sint nam, deleniti officiis eum minima excepturi illo, aut repudiandae dolorem, doloribus molestiae aperiam numquam voluptatum soluta quae! Nemo, at veritatis quidem ipsam adipisci eaque dolorum laboriosam odit eligendi assumenda, aspernatur libero a minus temporibus suscipit perspiciatis numquam esse sapiente reprehenderit accusantium quo officiis repellat. Quidem consequuntur sit quae dolore similique distinctio animi a. Minima nihil, culpa vel fugit expedita qui aliquid magnam soluta optio esse ut unde? Quia tempore quaerat quae fuga suscipit, reiciendis quos debitis nam ut, dignissimos harum in modi blanditiis eaque. Iure tempora cumque suscipit nemo, quod nihil illo minima sit vitae tempore temporibus ab nam dignissimos cum? Nisi maxime exercitationem debitis velit ipsam placeat perferendis. Voluptatem perspiciatis inventore saepe eius error. Molestiae, accusamus! Provident rerum dignissimos perspiciatis consequatur neque cupiditate perferendis esse facere eligendi, tempora non expedita accusantium repellendus veniam hic praesentium nulla laudantium obcaecati sit assumenda modi, aliquam dolores? In, maiores vel harum molestias illum doloribus aliquid optio adipisci fuga. Sed, hic ipsa. Quam, minus et doloribus inventore dicta recusandae! Voluptate, eaque nesciunt porro quos a labore aspernatur reprehenderit! Eveniet at nesciunt quia expedita, cum asperiores corrupti sed aspernatur optio ad! Officiis, nisi laboriosam ratione incidunt praesentium officia assumenda maxime eos repellendus tempore, ullam at soluta modi, nostrum minima magnam temporibus? Facere quam neque possimus totam, minima aperiam et, nesciunt tempora quae modi magnam expedita voluptatum aliquam error incidunt aut dolore vitae voluptas assumenda earum voluptatibus. Voluptatum vitae dolores quasi eius beatae? Aliquam explicabo deserunt magnam. Quisquam, in exercitationem, ex quia sequi deserunt quidem doloribus voluptatum libero omnis possimus porro corrupti placeat reiciendis numquam facilis sint incidunt odit. Corrupti nisi aut dolor doloremque voluptatum consectetur iusto voluptates impedit id magni est, accusantium esse fugiat, cupiditate, eius sequi commodi quaerat reprehenderit magnam tempora. Minima optio veritatis incidunt quas, aliquam at, impedit necessitatibus quam magnam fugit aliquid dicta perspiciatis. Nemo atque debitis provident laudantium voluptas, reprehenderit earum architecto illum. Quam soluta eum similique ipsum corrupti illum! Vitae quaerat quibusdam, ratione, totam quidem itaque repellat aspernatur incidunt omnis quas sed quasi numquam?</div> */}
            {/* <img className="object-cover object-center saturate-150 opacity-95" src={require('../images/img_1.jpg')} alt="img" /> */}
           
        </div>

    )
}

export default Hero