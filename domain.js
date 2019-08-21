function subdomainNames(domain) {
    const subdomains = [];

    domain.forEach(subdomain => {
        subdomains.push(subdomain);
    });
    return subdomains;
};

// So to be completely honest, I've never worked with brute force, or with how to find domains of such. I've only worked on how to build websites from scratch. I would love the opportunity to learn more about this.

// But as for this problem, I understand it isn't correct. However, I was thinking what I would do, is either find a github repo full of subdomains and when one domain is called, to map over the subdomains of the domain and push all of them into an array, and then return that array.

// On a very small spectrum, that is what I wanted to do, but I wasn't sure where I could find the list of subdomains.
