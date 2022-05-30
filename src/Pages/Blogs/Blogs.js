import React from 'react';
import Header from '../Shared/Header/Header';

const Blogs = () => {
    const products = [
        { name: 'Iphone', price: 100, description: 'lorem ipsum' },
        { name: 'Samsung', price: 100, description: 'lorem ipsum' },
        { name: 'Oppo', price: 100, description: 'lorem ipsum' },
        { name: 'Iphone', price: 100, description: 'lorem ipsum' },
        { name: 'Xiaomi', price: 200, description: 'lorem ipsum' },
        { name: 'Realme', price: 100, description: 'lorem ipsum' },
    ];
    const search = 'Iphone';
    const result = products.filter(product => product.name === search);
    console.log(result);
    return (
        <main>
            <Header />

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog py-3">
                                <p>Q: How will you improve the performance of a React Application?</p>
                                <p><b>Ans: </b>
                                    <ul>
                                        <li>Keeping component state local where necessary</li>
                                        <li>Memoizing React components to prevent unnecessary re-renders</li>
                                        <li>Lazy loading images in React</li>
                                        <li>Code-splitting in React using dynamic import()</li>
                                        <li>Using Immutable Data Structures</li>
                                    </ul></p>
                            </div>
                            <div className="blog py-3">
                                <p>Q: How does prototypical inheritance work?</p>
                                <p><b>Ans: </b>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We would like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Prototypal inheritance is a language feature that helps in that.</p>
                            </div>
                            <div className="blog py-3">
                                <p>Q: Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                                <p><b>Ans: </b>We should never update state directly
                                    <ul>
                                        <li>If we update state directly, calling the setState() will replace that value.</li>
                                        <li>When we set state directly, it doesn't update state immedietly.</li>
                                        <li>Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                                        <li>This way we will lose control of the state across all components.</li>
                                    </ul></p>
                            </div>
                            <div className="blog py-3">
                                <p>Q: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                                <p><b>Ans: </b><pre>{
                                    `                                  const products = [
                                        {name: 'Iphone', price: 100, description: 'lorem ipsum'},
                                        {name: 'Samsung', price: 100, description: 'lorem ipsum'},
                                        {name: 'Oppo', price: 100, description: 'lorem ipsum'},
                                        {name: 'Iphone', price: 100, description: 'lorem ipsum'},
                                        {name: 'Xiaomi', price: 200, description: 'lorem ipsum'},
                                        {name: 'Realme', price: 100, description: 'lorem ipsum'},
                                    ];
                                    const search = 'Iphone';
                                    const result = products.filter(product => product.name === search);
                                    console.log(result);`}</pre></p>
                            </div>
                            <div className="blog py-3">
                                <p>Q: What is a unit test? Why should write unit tests?</p>
                                <p><b>Ans: </b>JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. These unit tests are then organized in the test suite. <br/><br/>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Blogs;