
import React, { Component } from 'react';
import { blogitems, detailBlog } from './datas'
const BlogContext = React.createContext();


class BlogProvider extends Component {
    state = {
        blogs: [],
        featuredBlogs: [],
        bestFeaturedBlogs: [],
        bestNewsBlogs: [],
        doctordetailsBlogs: [],
        recentPostBlogs: [],
        detailBlog: detailBlog
    }
    componentDidMount() {
        this.setBlogs();
        // let products = this.formatData(blogitems);
        let blogs = blogitems;
        let featuredBlogs = blogs.filter(blog => blog.featured === true);
        let bestFeaturedBlogs = blogs.filter(blog => blog.bestFeatured === true);
        let bestNewsBlogs = blogs.filter(blog => blog.bestNews === true);
        let doctordetailsBlogs = blogs.filter(blog => blog.doctordetails === true);
        let recentPostBlogs = blogs.filter(blog => blog.recentPost === true);
        this.setState({
            blogs,
            featuredBlogs,
            bestFeaturedBlogs,
            bestNewsBlogs,
            doctordetailsBlogs,
            recentPostBlogs,
        });
    }
    setBlogs = () => {
        let blogs = [];
        blogitems.forEach(item => {
            const singleItem = { ...item };
            blogs = [...blogs, singleItem];
        });
        this.setState(() => {
            return { blogs }
        })
    };
    getItem = (id) => {
        const blog = this.state.blogs.find(item => item.id === id);
        return blog;
    };
    handleDetails = (id) => {
        const blog = this.getItem(id);
        this.setState(() => {
            return { detailBlog: blog }
        })
    };
    render() {
        return (
            <BlogContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
            }}
            >
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}
const BlogConsumer = BlogContext.Consumer;
export { BlogProvider, BlogConsumer }



