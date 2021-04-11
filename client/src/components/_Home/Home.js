import './Home.css';

//  COMPONENTS
import CardInfo from '../Cards/Info/CardInfo';
import CardTestimonials from '../Cards/Testimonials/CardTestimonials';
import CardPricing from '../Cards/Pricing/CardPricing';

export default function Home() {
    return (
        <>
            <header className="home-hero">
                <div className="header-overlay">
                    <h1 className="home-header">Budget Buddy</h1>
                    <div className="rotate-text">
                        <span className="text-1">1. Create a Budget</span>
                        <span className="text-2">2. Save Money</span>
                        <span className="text-3">3. Buy Nicer Things</span>
                    </div>
                </div>
            </header>

            <section className="sales-pitch">
                <h2>Why Budget Buddy?</h2>
                <CardInfo
                    title="The Experience"
                    text="Ugh, Budgeting money? That sounds daunting. Although most people will never like budgeting, our software ensures a pain-free experience."
                    image="https://source.unsplash.com/random/200x200"
                />
                <CardInfo
                    title="Be In The Know"
                    text="Most people who start tracking their expenses are shocked by just how much money they spend on things. If you work 5 days a week, eat out for lunch each day spending $5, that's $100 a month!"
                    image="https://source.unsplash.com/random/200x200"
                />
                <CardInfo
                    title="What Money Troubles?"
                    text="Creating and following a budget eliminates 99.99% of money troubles, while also providing funds for more fun."
                    image="https://source.unsplash.com/random/200x200"
                />
            </section>

            <section className="testimonials">
                <header>
                    <h2>What Others Say</h2>
                </header>
                <div className="testimonial-cards">

                    <CardTestimonials
                        image="https://source.unsplash.com/random/50x50"
                        author="Michelle Langley"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi libero quam recusandae iure dicta doloremque magnam minima reiciendis labore vitae."
                    />
                    <CardTestimonials
                        image="https://source.unsplash.com/random/50x50"
                        author="Sarah Johnson"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi libero quam recusandae iure dicta doloremque magnam minima reiciendis labore vitae."
                    />
                    <CardTestimonials
                        image="https://source.unsplash.com/random/50x50"
                        author="David Butterman"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi libero quam recusandae iure dicta doloremque magnam minima reiciendis labore vitae."
                    />
                </div>
            </section>

            <section className="pricing-info">
                <h2>Pick A Plan!</h2>
                <div className="pricing-cards">
                    <CardPricing
                        title="Try it FREE!"
                        subtitle="for 30 days."
                        buttonLink=""
                        disclaimer="Auto renews at $3.99 after 30 days."
                    />
                    <CardPricing
                        title="Monthly"
                        subtitle="$3.99/mo"
                        buttonLink=""
                        disclaimer="If you haven't used the free trial it will automatically be applied for the first 30 days"
                    />
                    <CardPricing
                        title="Yearly"
                        subtitle="$30/yr"
                        buttonLink=""
                        disclaimer="If you haven't used the free trial it will automatically be applied for the first 30 days"
                    />
                </div>
            </section>

        </>
    )
}
