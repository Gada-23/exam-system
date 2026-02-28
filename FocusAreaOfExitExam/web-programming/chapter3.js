// ===============================
// FOCUS AREA: WEB PROGRAMMING - CHAPTER 3
// Building and Managing Information-Rich Websites
// Based on Ministry of Education Blueprint (1 Analyze, 1 Evaluate)
// File Path: FocusAreaOfExitExam/web-programming/chapter3.js
// ===============================
console.log("🚀 Chapter 3 script is executing!");
console.log("Timestamp:", new Date().toISOString());

window.focusAreaWebChapter3 = {
  title: "Chapter 3: Building and Managing Information-Rich Websites",

  description:
    "Advanced concepts in planning, building, and managing complex websites with rich content, including content management systems, information architecture, and performance optimization.",

  // Blueprint alignment: 2 questions (1 Analyze, 1 Evaluate)
  blueprint: {
    totalQuestions: 2,
    cognitiveLevels: {
      analyze: 1,
      evaluate: 1,
    },
    topics: [
      "Information architecture and content organization",
      "Content Management Systems (CMS)",
      "Database design for web applications",
      "Search functionality and indexing",
      "Performance optimization techniques",
      "Scalability considerations",
      "Security in information-rich websites",
      "SEO principles and best practices",
    ],
  },

  learningObjectives: [
    "Analyze information architecture requirements for complex websites",
    "Evaluate different CMS platforms for specific project needs",
    "Design database schemas for content-heavy applications",
    "Implement effective search functionality",
    "Analyze performance bottlenecks and apply optimization techniques",
    "Evaluate security measures for protecting user data and content",
    "Apply SEO principles to improve website visibility",
    "Assess scalability options for growing websites",
  ],

  sections: [
    {
      title: "3.1 Information Architecture (Analyze Level)",
      content: `
                <h4>What is Information Architecture?</h4>
                <p>Information Architecture (IA) is the structural design of shared information environments. It involves organizing, structuring, and labeling content to help users find information and complete tasks effectively.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> Good information architecture reduces cognitive load, improves findability, and enhances user experience. It's the foundation of any information-rich website.</p>
                </div>
                
                <h4>Components of Information Architecture</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Component</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Organization Systems</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How content is categorized and structured</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hierarchical (categories/subcategories), Chronological (blogs), Topic-based</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Labeling Systems</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How information is represented and named</td>
                        <td style="padding:8px; border:1px solid #ddd;">Navigation labels, headings, category names</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Navigation Systems</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How users move through content</td>
                        <td style="padding:8px; border:1px solid #ddd;">Menus, breadcrumbs, site maps, search</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Search Systems</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How users find specific content</td>
                        <td style="padding:8px; border:1px solid #ddd;">Search boxes, filters, facets, advanced search</td>
                    </tr>
                </table>
                
                <h4>Information Architecture Design Process</h4>
                <ol>
                    <li><strong>Content Audit:</strong> Inventory existing content and identify gaps</li>
                    <li><strong>User Research:</strong> Understand user needs, behaviors, and mental models</li>
                    <li><strong>Card Sorting:</strong> Involve users in grouping content logically</li>
                    <li><strong>Site Mapping:</strong> Create visual representation of site structure</li>
                    <li><strong>Wireframing:</strong> Design page layouts and navigation elements</li>
                    <li><strong>Testing:</strong> Validate IA with users through tree testing</li>
                </ol>
                
                <h4>Analyze Exercise: E-commerce Site IA</h4>
                
                <p><strong>Scenario:</strong> An online electronics store needs to organize thousands of products including computers, phones, accessories, and appliances. Products have multiple attributes (brand, price, specifications, ratings).</p>
                
                <p><strong>Analysis:</strong></p>
                
                <h5>Organization System Options:</h5>
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Option</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros</th>
                        <th style="padding:10px; border:1px solid #ddd;">Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hierarchical by Category</strong><br>Electronics → Computers → Laptops</td>
                        <td style="padding:8px; border:1px solid #ddd;">Familiar, easy to understand, works for most users</td>
                        <td style="padding:8px; border:1px solid #ddd;">Products that fit multiple categories (gaming laptop in Computers & Gaming)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Faceted Navigation</strong><br>Filter by brand, price, features</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, allows multiple access paths, great for complex products</td>
                        <td style="padding:8px; border:1px solid #ddd;">More complex to implement, requires good metadata</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Hybrid Approach</strong><br>Categories + Faceted filters</td>
                        <td style="padding:8px; border:1px solid #ddd;">Best of both worlds, supports different user behaviors</td>
                        <td style="padding:8px; border:1px solid #ddd;">More development effort</td>
                    </tr>
                </table>
                
                <h5>Navigation System:</h5>
                <ul>
                    <li><strong>Primary Navigation:</strong> Top-level categories (Computers, Phones, Accessories)</li>
                    <li><strong>Secondary Navigation:</strong> Subcategories under each primary</li>
                    <li><strong>Breadcrumbs:</strong> Home > Computers > Laptops > Gaming Laptops</li>
                    <li><strong>Contextual Navigation:</strong> "Related products," "Customers also bought"</li>
                    <li><strong>Footer Navigation:</strong> Help, About, Contact, Policies</li>
                </ul>
                
                <h5>Recommendation:</h5>
                <p>A hybrid approach with hierarchical categories and faceted filtering provides the best user experience. Users can browse by category or drill down using filters, accommodating different search behaviors.</p>
            `,
      keyPoints: [
        "Information Architecture organizes content for findability",
        "Components: Organization, Labeling, Navigation, Search systems",
        "Card sorting and tree testing validate IA decisions",
        "Faceted navigation is powerful for complex product catalogs",
        "Good IA reduces user effort and improves task completion",
      ],
    },

    {
      title: "3.2 Content Management Systems (CMS) (Evaluate Level)",
      content: `
                <h4>What is a Content Management System?</h4>
                <p>A Content Management System (CMS) is software that enables users to create, manage, and modify content on a website without specialized technical knowledge. It separates content from presentation and provides administrative interfaces.</p>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> CMS platforms democratize content publishing, allowing non-technical users to maintain websites while developers focus on functionality and design.</p>
                </div>
                
                <h4>Popular CMS Platforms</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Platform</th>
                        <th style="padding:10px; border:1px solid #ddd;">Technology</th>
                        <th style="padding:10px; border:1px solid #ddd;">Best For</th>
                        <th style="padding:10px; border:1px solid #ddd;">Market Share</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>WordPress</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">PHP/MySQL</td>
                        <td style="padding:8px; border:1px solid #ddd;">Blogs, business sites, e-commerce (with WooCommerce)</td>
                        <td style="padding:8px; border:1px solid #ddd;">~43% of all websites</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Drupal</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">PHP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Complex, content-heavy sites, government, enterprise</td>
                        <td style="padding:8px; border:1px solid #ddd;">~2%</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Joomla</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">PHP</td>
                        <td style="padding:8px; border:1px solid #ddd;">E-commerce, social networks, mid-complexity sites</td>
                        <td style="padding:8px; border:1px solid #ddd;">~2%</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Shopify</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Ruby/Liquid</td>
                        <td style="padding:8px; border:1px solid #ddd;">E-commerce (hosted solution)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Leading e-commerce platform</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Magento (Adobe Commerce)</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">PHP</td>
                        <td style="padding:8px; border:1px solid #ddd;">Large-scale e-commerce, enterprise</td>
                        <td style="padding:8px; border:1px solid #ddd;">~1% but high revenue sites</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Headless CMS</strong><br>(Contentful, Strapi, Sanity)</td>
                        <td style="padding:8px; border:1px solid #ddd;">API-driven</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multi-channel content (web, mobile, IoT), custom frontends</td>
                        <td style="padding:8px; border:1px solid #ddd;">Growing rapidly</td>
                    </tr>
                </table>
                
                <h4>CMS Evaluation Criteria</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Criteria</th>
                        <th style="padding:10px; border:1px solid #ddd;">Questions to Ask</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Ease of Use</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can non-technical users create/edit content? Is the admin interface intuitive?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Customization</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Can we extend functionality with plugins/modules? Can we create custom content types?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scalability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Will it handle growth in content and traffic? Can it be cached/CDN-enabled?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Security</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How frequently are security updates released? Is there a security track record?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cost</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">License fees? Hosting costs? Developer costs? Premium plugins?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Community/Support</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Is there active community? Documentation? Professional support options?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Performance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">How does it perform under load? Built-in caching? Database optimization?</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SEO Features</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Built-in SEO tools? Custom URLs? Meta tags? XML sitemaps?</td>
                    </tr>
                </table>
                
                <h4>Evaluate Exercise: CMS Selection for Different Scenarios</h4>
                
                <p><strong>Scenario 1: Small Business Blog</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Easy to use, low cost, blog functionality, occasional updates, 5-10 pages</li>
                    <li><strong>Options:</strong> WordPress, Wix, Squarespace, Ghost</li>
                    <li><strong>Evaluation:</strong> 
                        <ul>
                            <li><strong>WordPress:</strong> Excellent choice - free, huge community, thousands of themes/plugins, easy for non-technical users</li>
                            <li><strong>Wix/Squarespace:</strong> Even easier but less flexible, monthly fees</li>
                            <li><strong>Ghost:</strong> Modern, fast, but focused on blogging only</li>
                        </ul>
                    </li>
                    <li><strong>Recommendation:</strong> WordPress on shared hosting - best balance of ease, flexibility, and cost</li>
                </ul>
                
                <p><strong>Scenario 2: Large E-commerce Site with 50,000+ Products</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Scalable, handles complex product data, multi-currency, multi-language, integrates with ERP</li>
                    <li><strong>Options:</strong> Magento, Shopify Plus, WooCommerce (with optimization), Custom solution</li>
                    <li><strong>Evaluation:</strong>
                        <ul>
                            <li><strong>Magento:</strong> Powerful, scalable, but complex and requires experienced developers</li>
                            <li><strong>Shopify Plus:</strong> Hosted, scalable, easier but less customization, ongoing fees</li>
                            <li><strong>WooCommerce:</strong> Could work but requires significant optimization for 50k products</li>
                            <li><strong>Custom:</strong> Most flexible but most expensive and time-consuming</li>
                        </ul>
                    </li>
                    <li><strong>Recommendation:</strong> Magento for complete control and scalability if developer resources available; Shopify Plus for faster time-to-market with less technical overhead</li>
                </ul>
                
                <p><strong>Scenario 3: University Website with Multiple Departments and Content Types</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Complex content types, multiple user roles with different permissions, integration with student systems, multi-site management</li>
                    <li><strong>Options:</strong> Drupal, WordPress Multisite, Custom</li>
                    <li><strong>Evaluation:</strong>
                        <ul>
                            <li><strong>Drupal:</strong> Excellent for complex content types, granular permissions, taxonomy, scales well for large sites</li>
                            <li><strong>WordPress Multisite:</strong> Good for multiple sites under one installation, simpler but less flexible for complex content</li>
                        </ul>
                    </li>
                    <li><strong>Recommendation:</strong> Drupal for its superior content modeling, taxonomy, and permission system</li>
                </ul>
                
                <p><strong>Scenario 4: Multi-channel Content (Website + Mobile App + IoT Devices)</strong></p>
                <ul>
                    <li><strong>Requirements:</strong> Content delivered via API to multiple frontends, structured content, developer-friendly</li>
                    <li><strong>Options:</strong> Headless CMS (Contentful, Strapi, Sanity), Traditional CMS with API (WordPress REST API)</li>
                    <li><strong>Evaluation:</strong>
                        <ul>
                            <li><strong>Headless CMS:</strong> Purpose-built for API delivery, structured content, great developer experience</li>
                            <li><strong>Traditional CMS with API:</strong> Can work but often bolted-on, may have performance limitations</li>
                        </ul>
                    </li>
                    <li><strong>Recommendation:</strong> Headless CMS like Contentful or open-source Strapi for API-first architecture</li>
                </ul>
            `,
      keyPoints: [
        "CMS separates content from presentation, enabling non-technical users",
        "WordPress dominates market (43% of websites) - versatile but has security considerations",
        "Drupal excels at complex content types and permissions",
        "Magento and Shopify for e-commerce at different scales",
        "Headless CMS emerging for multi-channel content delivery",
        "CMS selection depends on requirements, budget, and technical resources",
      ],
    },

    {
      title: "3.3 Database Design for Content-Rich Websites (Analyze Level)",
      content: `
                <h4>Database Considerations for Content Management</h4>
                <p>Information-rich websites require well-designed databases that balance normalization, performance, and flexibility.</p>
                
                <h4>Content Storage Patterns</h4>
                
                <h5>1. Relational Database (SQL)</h5>
                <p>Best for structured content with clear relationships. Examples: MySQL, PostgreSQL, SQLite</p>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Blog database schema
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id INT NULL,
    FOREIGN KEY (parent_id) REFERENCES categories(id)
);

CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    content LONGTEXT NOT NULL,
    excerpt TEXT,
    featured_image VARCHAR(255),
    author_id INT NOT NULL,
    category_id INT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    view_count INT DEFAULT 0,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    INDEX idx_status_published (status, published_at),
    FULLTEXT INDEX idx_content (title, content)
);

CREATE TABLE tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
    post_id INT,
    tag_id INT,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT,
    author_name VARCHAR(100),
    author_email VARCHAR(100),
    content TEXT NOT NULL,
    status ENUM('pending', 'approved', 'spam') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_post_status (post_id, status)
);
                </pre>
                
                <h5>2. NoSQL Databases</h5>
                <p>Best for unstructured content, rapid iteration, and scalability. Examples: MongoDB, Firebase, CouchDB</p>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// MongoDB document structure for a blog post
{
    "_id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7f"),
    "title": "Understanding NoSQL Databases",
    "slug": "understanding-nosql-databases",
    "content": "Long content here...",
    "excerpt": "Brief summary...",
    "author": {
        "id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7a"),
        "name": "John Doe",
        "email": "john@example.com"
    },
    "category": {
        "id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7b"),
        "name": "Database",
        "slug": "database"
    },
    "tags": [
        {"id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7c"), "name": "NoSQL", "slug": "nosql"},
        {"id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7d"), "name": "MongoDB", "slug": "mongodb"}
    ],
    "metadata": {
        "viewCount": 1520,
        "readingTime": 8,
        "featuredImage": "/images/post1.jpg"
    },
    "status": "published",
    "publishedAt": ISODate("2024-01-15T10:30:00Z"),
    "createdAt": ISODate("2024-01-10T14:20:00Z"),
    "updatedAt": ISODate("2024-01-15T10:30:00Z"),
    "comments": [
        {
            "id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7e"),
            "user": {"id": ObjectId("5f8d0f8b9d3e2a1b4c5d6e7g"), "name": "Jane Smith"},
            "content": "Great article!",
            "createdAt": ISODate("2024-01-16T09:15:00Z")
        }
    ]
}
                </pre>
                
                <h4>SQL vs NoSQL for Content Management</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Aspect</th>
                        <th style="padding:10px; border:1px solid #ddd;">SQL (Relational)</th>
                        <th style="padding:10px; border:1px solid #ddd;">NoSQL (Document)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Schema</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Fixed, requires migrations</td>
                        <td style="padding:8px; border:1px solid #ddd;">Flexible, can vary between documents</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Relationships</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Excellent with JOINs, foreign keys</td>
                        <td style="padding:8px; border:1px solid #ddd;">Embed or reference, JOINs not native</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Query Flexibility</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Powerful, complex queries possible</td>
                        <td style="padding:8px; border:1px solid #ddd;">Limited compared to SQL</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Scalability</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Vertical scaling (bigger server)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Horizontal scaling (distributed)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>ACID Compliance</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Strong ACID</td>
                        <td style="padding:8px; border:1px solid #ddd;">Varies, often eventual consistency</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Use Case</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Structured content with clear relationships</td>
                        <td style="padding:8px; border:1px solid #ddd;">Rapid iteration, unstructured content, high scalability needs</td>
                    </tr>
                </table>
                
                <h4>Performance Optimization Techniques</h4>
                
                <h5>1. Indexing Strategy</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Create indexes on frequently queried columns
CREATE INDEX idx_posts_published ON posts(published_at);
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_category ON posts(category_id);

-- Composite indexes for common queries
CREATE INDEX idx_posts_status_published ON posts(status, published_at);

-- Full-text search indexes
CREATE FULLTEXT INDEX idx_posts_search ON posts(title, content);
                </pre>
                
                <h5>2. Caching Layer</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Redis caching example (Node.js)
const redis = require('redis');
const client = redis.createClient();

async function getPost(id) {
    // Try cache first
    const cached = await client.get('post:' + id);
    if (cached) {
        return JSON.parse(cached);
    }
    
    // Cache miss - query database
    const post = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
    
    // Store in cache for 1 hour
    await client.setex('post:' + id, 3600, JSON.stringify(post));
    
    return post;
}
                </pre>
                
                <h5>3. Denormalization</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Denormalized approach: store author name and category name with post
ALTER TABLE posts ADD COLUMN author_name VARCHAR(100);
ALTER TABLE posts ADD COLUMN category_name VARCHAR(100);

-- Update via triggers or application code
UPDATE posts p
JOIN users u ON p.author_id = u.id
JOIN categories c ON p.category_id = c.id
SET p.author_name = u.username, p.category_name = c.name;
                </pre>
            `,
      keyPoints: [
        "SQL databases excel at structured content with relationships",
        "NoSQL offers flexibility and horizontal scaling",
        "Indexes dramatically improve query performance",
        "Caching reduces database load",
        "Denormalization improves read performance at cost of write complexity",
        "Choose database based on content structure and scalability needs",
      ],
    },

    {
      title: "3.4 Search Functionality and Indexing (Analyze Level)",
      content: `
                <h4>Search in Information-Rich Websites</h4>
                <p>Effective search is critical for large websites. Users expect fast, relevant results with features like autocomplete, filters, and faceted search.</p>
                
                <h4>Search Implementation Approaches</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Approach</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Pros/Cons</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Database LIKE Queries</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Simple SQL with %wildcard%</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Simple to implement<br>❌ Slow on large datasets<br>❌ No relevance ranking<br>❌ Exact matches only</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Full-Text Search</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Database full-text indexes (MySQL FULLTEXT, PostgreSQL tsvector)</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Faster than LIKE<br>✅ Relevance ranking<br>✅ Word stemming<br>❌ Limited features compared to dedicated search</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Dedicated Search Engine</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Elasticsearch, Solr, Algolia, Meilisearch</td>
                        <td style="padding:8px; border:1px solid #ddd;">✅ Blazing fast<br>✅ Advanced features (facets, fuzzy, autocomplete)<br>✅ Scalable<br>❌ Additional infrastructure/complexity</td>
                    </tr>
                </table>
                
                <h4>Full-Text Search Examples</h4>
                
                <h5>MySQL Full-Text Search</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Create FULLTEXT index
ALTER TABLE posts ADD FULLTEXT(title, content);

-- Natural language search (relevance-based)
SELECT id, title, 
       MATCH(title, content) AGAINST('database optimization') AS relevance
FROM posts
WHERE MATCH(title, content) AGAINST('database optimization')
ORDER BY relevance DESC;

-- Boolean mode (include/exclude terms)
SELECT * FROM posts
WHERE MATCH(title, content) AGAINST('+database -mysql' IN BOOLEAN MODE);

-- With phrase search
SELECT * FROM posts
WHERE MATCH(title, content) AGAINST('"exact phrase"' IN BOOLEAN MODE);
                </pre>
                
                <h5>PostgreSQL Full-Text Search</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
-- Create tsvector column
ALTER TABLE posts ADD COLUMN search_vector tsvector;

-- Update with combined searchable content
UPDATE posts SET search_vector = 
    setweight(to_tsvector('english', coalesce(title,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(content,'')), 'B');

-- Create GIN index
CREATE INDEX idx_posts_search ON posts USING GIN(search_vector);

-- Search query
SELECT id, title, 
       ts_rank(search_vector, query) AS rank
FROM posts, to_tsquery('english', 'database & optimization') query
WHERE search_vector @@ query
ORDER BY rank DESC;
                </pre>
                
                <h4>Elasticsearch Example</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Index mapping
{
    "mappings": {
        "properties": {
            "title": { "type": "text", "analyzer": "standard" },
            "content": { "type": "text", "analyzer": "standard" },
            "author": { "type": "keyword" },
            "category": { "type": "keyword" },
            "published_at": { "type": "date" },
            "tags": { "type": "keyword" },
            "view_count": { "type": "integer" }
        }
    }
}

// Search query with faceting
{
    "query": {
        "bool": {
            "must": [
                { "match": { "content": "database optimization" } }
            ],
            "filter": [
                { "term": { "category": "technology" } },
                { "range": { "published_at": { "gte": "2024-01-01" } } }
            ]
        }
    },
    "aggs": {
        "by_category": {
            "terms": { "field": "category" }
        },
        "by_author": {
            "terms": { "field": "author" }
        }
    },
    "highlight": {
        "fields": {
            "content": { "fragment_size": 100, "number_of_fragments": 3 }
        }
    },
    "sort": [
        { "view_count": "desc" }
    ]
}
                </pre>
                
                <h4>Search Features to Consider</h4>
                
                <ul>
                    <li><strong>Autocomplete/Suggestions:</strong> Show suggestions as user types</li>
                    <li><strong>Did you mean:</strong> Spelling correction (Elasticsearch term suggester)</li>
                    <li><strong>Faceted Search:</strong> Filter by category, author, date, tags</li>
                    <li><strong>Relevance Tuning:</strong> Boost certain fields (title > content)</li>
                    <li><strong>Highlighting:</strong> Show matching terms in results</li>
                    <li><strong>Fuzzy Search:</strong> Handle typos (Levenshtein distance)</li>
                    <li><strong>Synonyms:</strong> Map similar terms (car, automobile, vehicle)</li>
                    <li><strong>Stop Words:</strong> Ignore common words (the, and, of)</li>
                    <li><strong>Stemming:</strong> Match word variations (run, running, ran)</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Point:</strong> For sites with more than a few thousand pages, dedicated search engines like Elasticsearch provide dramatically better performance and features than database search.</p>
                </div>
            `,
      keyPoints: [
        "Database LIKE queries don't scale for large content",
        "Full-text search improves performance and adds relevance ranking",
        "Dedicated search engines (Elasticsearch, Algolia) offer advanced features",
        "Faceted search allows users to filter results dynamically",
        "Consider autocomplete, fuzzy matching, and highlighting for better UX",
        "Search relevance tuning improves result quality",
      ],
    },

    {
      title:
        "3.5 Performance Optimization for Content-Rich Sites (Analyze Level)",
      content: `
                <h4>Performance Optimization Strategies</h4>
                <p>Information-rich websites must balance rich content with fast load times. Performance affects user experience, SEO, and conversion rates.</p>
                
                <h4>Frontend Optimization</h4>
                
                <h5>1. Image Optimization</h5>
                <ul>
                    <li><strong>Compression:</strong> Use tools like ImageOptim, TinyPNG</li>
                    <li><strong>Modern Formats:</strong> WebP, AVIF instead of JPEG/PNG</li>
                    <li><strong>Responsive Images:</strong> Serve different sizes for different devices</li>
                    <li><strong>Lazy Loading:</strong> Load images only when they enter viewport</li>
                </ul>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
<!-- Responsive images with srcset -->
&lt;img srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 1200w"
     sizes="(max-width: 320px) 280px,
            (max-width: 640px) 580px,
            1100px"
     src="fallback.jpg"
     alt="Description"
     loading="lazy"&gt;

<!-- Modern format with fallback -->
&lt;picture&gt;
    &lt;source srcset="image.avif" type="image/avif"&gt;
    &lt;source srcset="image.webp" type="image/webp"&gt;
    &lt;img src="image.jpg" alt="Description" loading="lazy"&gt;
&lt;/picture&gt;
                </pre>
                
                <h5>2. CSS and JavaScript Optimization</h5>
                <ul>
                    <li><strong>Minification:</strong> Remove whitespace, comments</li>
                    <li><strong>Bundling:</strong> Combine multiple files</li>
                    <li><strong>Code Splitting:</strong> Load only what's needed for current page</li>
                    <li><strong>Critical CSS:</strong> Inline above-the-fold styles</li>
                    <li><strong>Defer/Async:</strong> Load non-critical JavaScript after page load</li>
                </ul>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;!-- Defer parsing of JavaScript --&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;script src="analytics.js" async&gt;&lt;/script&gt;

&lt;!-- Preload critical resources --&gt;
&lt;link rel="preload" href="critical.css" as="style"&gt;
&lt;link rel="preload" href="hero-image.webp" as="image"&gt;

&lt;!-- Preconnect to external domains --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
                </pre>
                
                <h5>3. Caching Strategy</h5>
                <ul>
                    <li><strong>Browser Caching:</strong> Set Cache-Control headers</li>
                    <li><strong>Service Workers:</strong> Progressive Web App (PWA) offline caching</li>
                    <li><strong>CDN (Content Delivery Network):</strong> Serve static assets from edge locations</li>
                </ul>
                
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
<!-- .htaccess caching rules -->
&lt;IfModule mod_expires.c&gt;
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
&lt;/IfModule&gt;

<!-- Service Worker cache example (JavaScript) -->
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/styles/main.css',
                '/scripts/main.js',
                '/images/logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
                </pre>
                
                <h4>Backend Optimization</h4>
                
                <h5>1. Page Caching</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// WordPress: Install caching plugin (W3 Total Cache, WP Super Cache)
// Generate static HTML files

// Node.js with Redis caching
const cache = require('express-redis-cache')({ expire: 3600 });

app.get('/posts/:slug', cache.route(), async (req, res) => {
    const post = await db.getPost(req.params.slug);
    res.json(post);
});

// Varnish Cache configuration
sub vcl_recv {
    if (req.url ~ "^/posts/") {
        return (hash);
    }
}
                </pre>
                
                <h5>2. Database Query Optimization</h5>
                <ul>
                    <li>Use EXPLAIN to analyze slow queries</li>
                    <li>Add appropriate indexes</li>
                    <li>Optimize JOIN operations</li>
                    <li>Use query caching (Redis, Memcached)</li>
                    <li>Consider read replicas for read-heavy workloads</li>
                </ul>
                
                <h5>3. Content Delivery Network (CDN)</h5>
                <p>A CDN distributes content across multiple geographical locations, reducing latency by serving from locations closer to users.</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">CDN Provider</th>
                        <th style="padding:10px; border:1px solid #ddd;">Features</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cloudflare</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Free tier, DDoS protection, SSL, image optimization</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Akamai</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Enterprise-grade, massive network, advanced security</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Amazon CloudFront</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Integrates with AWS services, Lambda@Edge</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Fastly</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Real-time purging, VCL configuration, developer-friendly</td>
                    </tr>
                </table>
                
                <h4>Performance Analysis Tools</h4>
                <ul>
                    <li><strong>Google PageSpeed Insights:</strong> Analyzes performance and gives recommendations</li>
                    <li><strong>Lighthouse:</strong> Built into Chrome DevTools for comprehensive audits</li>
                    <li><strong>WebPageTest:</strong> Detailed performance testing from multiple locations</li>
                    <li><strong>GTmetrix:</strong> Combines PageSpeed and YSlow metrics</li>
                    <li><strong>Chrome DevTools:</strong> Network tab, Performance tab for deep analysis</li>
                </ul>
                
                <div class="key-points-box">
                    <p><strong>🔑 Key Metrics:</strong> First Contentful Paint (FCP), Largest Contentful Paint (LCP), Time to Interactive (TTI), Total Blocking Time (TBT), Cumulative Layout Shift (CLS) - these are Core Web Vitals that Google uses for ranking.</p>
                </div>
            `,
      keyPoints: [
        "Optimize images with modern formats, compression, and lazy loading",
        "Minify and bundle CSS/JS, use code splitting",
        "Implement browser caching and CDN for static assets",
        "Use page caching to reduce server load",
        "Optimize database queries with indexes and caching",
        "Monitor Core Web Vitals for SEO and user experience",
      ],
    },

    {
      title: "3.6 SEO Principles and Best Practices (Evaluate Level)",
      content: `
                <h4>What is SEO?</h4>
                <p>Search Engine Optimization (SEO) is the practice of improving the quantity and quality of traffic to a website from search engines through organic (non-paid) search results.</p>
                
                <h4>SEO Pillars</h4>
                
                <div style="display: flex; justify-content: space-around; margin: 20px 0; flex-wrap: wrap;">
                    <div style="background: #f0f2f5; padding: 20px; border-radius: 10px; width: 30%; min-width: 200px; margin: 10px; text-align: center;">
                        <i class="fas fa-file-alt" style="font-size: 40px; color: #2772a0;"></i>
                        <h4>On-Page SEO</h4>
                        <p>Content, keywords, HTML tags, internal linking</p>
                    </div>
                    <div style="background: #f0f2f5; padding: 20px; border-radius: 10px; width: 30%; min-width: 200px; margin: 10px; text-align: center;">
                        <i class="fas fa-link" style="font-size: 40px; color: #2772a0;"></i>
                        <h4>Off-Page SEO</h4>
                        <p>Backlinks, social signals, brand mentions</p>
                    </div>
                    <div style="background: #f0f2f5; padding: 20px; border-radius: 10px; width: 30%; min-width: 200px; margin: 10px; text-align: center;">
                        <i class="fas fa-tachometer-alt" style="font-size: 40px; color: #2772a0;"></i>
                        <h4>Technical SEO</h4>
                        <p>Site speed, mobile-friendliness, crawlability, indexing</p>
                    </div>
                </div>
                
                <h4>On-Page SEO Best Practices</h4>
                
                <h5>1. Title Tags</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;title&gt;Primary Keyword - Secondary Keyword | Brand Name&lt;/title&gt;
&lt;title&gt;Web Programming Tutorial - Learn JavaScript, PHP, MySQL | DevSite&lt;/title&gt;
                </pre>
                <ul>
                    <li>Include primary keyword near beginning</li>
                    <li>Keep under 60 characters (mobile display limit)</li>
                    <li>Make each title unique</li>
                    <li>Include brand name at the end</li>
                </ul>
                
                <h5>2. Meta Descriptions</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;meta name="description" content="Comprehensive web programming guide covering HTML, CSS, JavaScript, PHP, and MySQL. Perfect for beginners and experienced developers. Start learning today!"&gt;
                </pre>
                <ul>
                    <li>Include primary keyword and call to action</li>
                    <li>Keep between 150-160 characters</li>
                    <li>Make it compelling to increase click-through rate</li>
                </ul>
                
                <h5>3. Header Tags (H1, H2, H3)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;h1&gt;Complete Web Programming Guide&lt;/h1&gt;
    &lt;h2&gt;HTML Fundamentals&lt;/h2&gt;
        &lt;h3&gt;HTML Tags and Elements&lt;/h3&gt;
        &lt;h3&gt;Forms and Input&lt;/h3&gt;
    &lt;h2&gt;CSS Styling&lt;/h2&gt;
        &lt;h3&gt;Selectors and Properties&lt;/h3&gt;
        &lt;h3&gt;Flexbox and Grid&lt;/h3&gt;
                </pre>
                <ul>
                    <li>Use one H1 per page (primary topic)</li>
                    <li>Structure content hierarchically</li>
                    <li>Include keywords naturally</li>
                </ul>
                
                <h5>4. URL Structure</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
✅ Good: https://example.com/web-programming/javascript-tutorial
✅ Good: https://example.com/categories/web-programming
❌ Bad: https://example.com/page?id=123&cat=456
❌ Bad: https://example.com/2024/03/15/article-title
                </pre>
                <ul>
                    <li>Use descriptive keywords</li>
                    <li>Use hyphens (-) not underscores (_)</li>
                    <li>Keep URLs short and readable</li>
                    <li>Avoid parameters when possible</li>
                </ul>
                
                <h5>5. Image Optimization</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;img src="javascript-code-example.jpg" 
     alt="JavaScript code example showing function declaration and variable scope"
     title="JavaScript Function Example"
     loading="lazy"&gt;
                </pre>
                <ul>
                    <li>Use descriptive file names (javascript-tutorial.jpg not IMG001.jpg)</li>
                    <li>Write meaningful alt text for accessibility and SEO</li>
                    <li>Compress images for faster loading</li>
                </ul>
                
                <h5>6. Internal Linking</h5>
                <ul>
                    <li>Link related content together</li>
                    <li>Use descriptive anchor text (not "click here")</li>
                    <li>Create a logical site structure</li>
                    <li>Use breadcrumbs for navigation</li>
                </ul>
                
                <h4>Technical SEO Best Practices</h4>
                
                <h5>1. Mobile-Friendliness</h5>
                <ul>
                    <li>Use responsive design</li>
                    <li>Test with Google's Mobile-Friendly Test</li>
                    <li>Ensure tap targets are properly sized</li>
                    <li>No horizontal scrolling</li>
                </ul>
                
                <h5>2. Page Speed</h5>
                <ul>
                    <li>Optimize images (as covered in section 3.5)</li>
                    <li>Minify CSS, JavaScript, HTML</li>
                    <li>Leverage browser caching</li>
                    <li>Use a CDN</li>
                    <li>Aim for Core Web Vitals passing scores</li>
                </ul>
                
                <h5>3. XML Sitemap</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
    &lt;url&gt;
        &lt;loc&gt;https://example.com/&lt;/loc&gt;
        &lt;lastmod&gt;2024-03-15&lt;/lastmod&gt;
        &lt;changefreq&gt;daily&lt;/changefreq&gt;
        &lt;priority&gt;1.0&lt;/priority&gt;
    &lt;/url&gt;
    &lt;url&gt;
        &lt;loc&gt;https://example.com/web-programming&lt;/loc&gt;
        &lt;lastmod&gt;2024-03-14&lt;/lastmod&gt;
        &lt;changefreq&gt;weekly&lt;/changefreq&gt;
        &lt;priority&gt;0.8&lt;/priority&gt;
    &lt;/url&gt;
&lt;/urlset&gt;
                </pre>
                <ul>
                    <li>Submit to Google Search Console</li>
                    <li>Update when content changes</li>
                    <li>Include only canonical URLs</li>
                </ul>
                
                <h5>4. robots.txt</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/

Sitemap: https://example.com/sitemap.xml
                </pre>
                
                <h5>5. Structured Data (Schema.org)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
&lt;script type="application/ld+json"&gt;
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Web Programming Tutorial",
    "description": "Learn web programming from scratch",
    "author": {
        "@type": "Person",
        "name": "John Doe"
    },
    "datePublished": "2024-03-15",
    "image": "https://example.com/images/tutorial.jpg"
}
&lt;/script&gt;
                </pre>
                
                <h4>Evaluate Exercise: SEO Audit</h4>
                
                <p><strong>Scenario:</strong> A website has the following issues. Evaluate the impact and prioritize fixes:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Issue</th>
                        <th style="padding:10px; border:1px solid #ddd;">Impact</th>
                        <th style="padding:10px; border:1px solid #ddd;">Priority</th>
                        <th style="padding:10px; border:1px solid #ddd;">Solution</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Duplicate title tags across multiple pages</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - confuses search engines, poor CTR</td>
                        <td style="padding:8px; border:1px solid #ddd;">P1 - Critical</td>
                        <td style="padding:8px; border:1px solid #ddd;">Create unique, descriptive titles for each page</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Missing alt text on product images</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium - accessibility issue, missed image search traffic</td>
                        <td style="padding:8px; border:1px solid #ddd;">P2 - High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Add descriptive alt text to all images</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Slow mobile page speed (LCP 4.5s)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - affects rankings, user experience</td>
                        <td style="padding:8px; border:1px solid #ddd;">P1 - Critical</td>
                        <td style="padding:8px; border:1px solid #ddd;">Optimize images, implement lazy loading, minify CSS/JS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">No XML sitemap</td>
                        <td style="padding:8px; border:1px solid #ddd;">Medium - discovery of new content slower</td>
                        <td style="padding:8px; border:1px solid #ddd;">P2 - High</td>
                        <td style="padding:8px; border:1px solid #ddd;">Generate and submit sitemap to search consoles</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Broken internal links (404 errors)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - poor user experience, lost link equity</td>
                        <td style="padding:8px; border:1px solid #ddd;">P1 - Critical</td>
                        <td style="padding:8px; border:1px solid #ddd;">Fix or redirect broken links</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">No SSL certificate (HTTP site)</td>
                        <td style="padding:8px; border:1px solid #ddd;">Critical - security warning, ranking penalty</td>
                        <td style="padding:8px; border:1px solid #ddd;">P0 - Emergency</td>
                        <td style="padding:8px; border:1px solid #ddd;">Install SSL certificate, redirect to HTTPS</td>
                    </tr>
                </table>
            `,
      keyPoints: [
        "SEO has three pillars: On-page, Off-page, Technical",
        "Title tags and meta descriptions are critical for CTR",
        "Mobile-friendliness and page speed are ranking factors",
        "XML sitemaps help search engines discover content",
        "Structured data enables rich results in SERPs",
        "Regular SEO audits identify and prioritize issues",
        "HTTPS is mandatory (security and ranking factor)",
      ],
    },

    {
      title: "3.7 Security for Information-Rich Websites (Evaluate Level)",
      content: `
                <h4>Web Security Threats</h4>
                <p>Information-rich websites are prime targets for attacks. Understanding common vulnerabilities is essential for protection.</p>
                
                <h4>OWASP Top 10 (Overview)</h4>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Rank</th>
                        <th style="padding:10px; border:1px solid #ddd;">Vulnerability</th>
                        <th style="padding:10px; border:1px solid #ddd;">Description</th>
                        <th style="padding:10px; border:1px solid #ddd;">Prevention</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">1</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Broken Access Control</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Users can access unauthorized resources</td>
                        <td style="padding:8px; border:1px solid #ddd;">Implement proper authentication checks, deny by default</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">2</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Cryptographic Failures</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Sensitive data exposed due to weak encryption</td>
                        <td style="padding:8px; border:1px solid #ddd;">Use strong encryption (HTTPS), hash passwords properly</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">3</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Injection</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">SQL, NoSQL, OS command injection</td>
                        <td style="padding:8px; border:1px solid #ddd;">Parameterized queries, input validation, escaping</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">4</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Insecure Design</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Flaws in architecture and design</td>
                        <td style="padding:8px; border:1px solid #ddd;">Threat modeling, secure design patterns</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">5</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Security Misconfiguration</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Default credentials, unnecessary features enabled</td>
                        <td style="padding:8px; border:1px solid #ddd;">Hardened configurations, minimal privileges</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">6</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Vulnerable Components</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Outdated libraries with known vulnerabilities</td>
                        <td style="padding:8px; border:1px solid #ddd;">Regular updates, dependency scanning</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">7</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Identification Failures</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Broken authentication, session management</td>
                        <td style="padding:8px; border:1px solid #ddd;">Multi-factor auth, secure session handling</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">8</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Software Integrity Failures</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Untrusted updates, CI/CD pipeline issues</td>
                        <td style="padding:8px; border:1px solid #ddd;">Code signing, secure build pipeline</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">9</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>Logging Failures</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Insufficient monitoring and alerting</td>
                        <td style="padding:8px; border:1px solid #ddd;">Comprehensive logging, log analysis</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">10</td>
                        <td style="padding:8px; border:1px solid #ddd;"><strong>SSRF</strong></td>
                        <td style="padding:8px; border:1px solid #ddd;">Server-side request forgery</td>
                        <td style="padding:8px; border:1px solid #ddd;">Validate and sanitize URLs, allowlists</td>
                    </tr>
                </table>
                
                <h4>Common Attacks and Prevention</h4>
                
                <h5>1. SQL Injection</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Vulnerable code (DON'T DO THIS)
$query = "SELECT * FROM users WHERE username = '" . $_POST['username'] . "'";
$result = mysqli_query($conn, $query);

// Attacker input: ' OR '1'='1
// Query becomes: SELECT * FROM users WHERE username = '' OR '1'='1'

// Secure code with parameterized queries (PHP PDO)
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$_POST['username']]);
$user = $stmt->fetch();

// Node.js with parameterized queries
db.query('SELECT * FROM users WHERE username = $1', [username], (err, res) => {
    // handle result
});
                </pre>
                
                <h5>2. Cross-Site Scripting (XSS)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Vulnerable code (DON'T DO THIS)
document.getElementById('output').innerHTML = userInput;

// Attacker input: &lt;script&gt;stealCookies()&lt;/script&gt;

// Secure: Use textContent instead of innerHTML
document.getElementById('output').textContent = userInput;

// Server-side escaping (PHP)
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// Content Security Policy header
header("Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com");
                </pre>
                
                <h5>3. Cross-Site Request Forgery (CSRF)</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Generate CSRF token
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Include token in forms
&lt;input type="hidden" name="csrf_token" value="&lt;?php echo $_SESSION['csrf_token']; ?&gt;"&gt;

// Validate on submission
if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
    die('Invalid CSRF token');
}

// SameSite cookie attribute
setcookie('session', $value, [
    'samesite' => 'Strict',
    'secure' => true,
    'httponly' => true
]);
                </pre>
                
                <h5>4. File Upload Vulnerabilities</h5>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
// Validate file type
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
if (!in_array($_FILES['file']['type'], $allowedTypes)) {
    die('Invalid file type');
}

// Validate file extension
$extension = strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));
if (!in_array($extension, ['jpg', 'jpeg', 'png', 'gif'])) {
    die('Invalid extension');
}

// Scan for malware (optional)
// Store files outside webroot or with random names
$filename = bin2hex(random_bytes(16)) . '.' . $extension;
move_uploaded_file($_FILES['file']['tmp_name'], '/uploads/' . $filename);
                </pre>
                
                <h4>Security Headers</h4>
                <pre style="background:#2d2d2d; color:#f8f8f2; padding:15px; border-radius:5px;">
# .htaccess example
Header set X-Frame-Options "SAMEORIGIN"
Header set X-Content-Type-Options "nosniff"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.example.com"
Header set Permissions-Policy "geolocation=(), camera=(), microphone=()"

# Strict-Transport-Security (HSTS) - force HTTPS
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
                </pre>
                
                <h4>Evaluate Exercise: Security Assessment</h4>
                
                <p><strong>Scenario:</strong> Evaluate the security of a content management system and recommend fixes:</p>
                
                <table style="width:100%; border-collapse: collapse; margin:15px 0;">
                    <tr style="background-color:#2772a0; color:white;">
                        <th style="padding:10px; border:1px solid #ddd;">Finding</th>
                        <th style="padding:10px; border:1px solid #ddd;">Risk</th>
                        <th style="padding:10px; border:1px solid #ddd;">Recommendation</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Passwords stored in plain text</td>
                        <td style="padding:8px; border:1px solid #ddd;">Critical - data breach exposes all user credentials</td>
                        <td style="padding:8px; border:1px solid #ddd;">Use bcrypt with cost factor 10+ to hash passwords</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">No HTTPS (HTTP only)</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - credentials and data transmitted in clear</td>
                        <td style="padding:8px; border:1px solid #ddd;">Install SSL certificate, redirect HTTP to HTTPS</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Admin panel accessible at /admin without IP restriction</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - brute force attacks possible</td>
                        <td style="padding:8px; border:1px solid #ddd;">Restrict by IP, implement rate limiting, use 2FA</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">File upload allows PHP files</td>
                        <td style="padding:8px; border:1px solid #ddd;">Critical - attacker can upload webshell</td>
                        <td style="padding:8px; border:1px solid #ddd;">Validate file types, store outside webroot, scan for malware</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">SQL queries concatenate user input</td>
                        <td style="padding:8px; border:1px solid #ddd;">Critical - SQL injection vulnerability</td>
                        <td style="padding:8px; border:1px solid #ddd;">Use parameterized queries/prepared statements</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">Outdated CMS version with known vulnerabilities</td>
                        <td style="padding:8px; border:1px solid #ddd;">High - known exploits available</td>
                        <td style="padding:8px; border:1px solid #ddd;">Update to latest version, enable automatic security updates</td>
                    </tr>
                </table>
            `,
      keyPoints: [
        "OWASP Top 10 identifies most critical web vulnerabilities",
        "SQL injection: use parameterized queries, never concatenate input",
        "XSS: escape output, use Content Security Policy",
        "CSRF: use tokens and SameSite cookies",
        "File uploads: validate type, content, and store securely",
        "Security headers provide additional protection layers",
        "Regular security updates and dependency scanning essential",
        "HTTPS is mandatory (SSL/TLS)",
      ],
    },
  ],

  keyPoints: [
    "Information architecture organizes content for findability",
    "CMS selection depends on requirements, budget, and technical resources",
    "Database design balances normalization with performance (indexes, caching)",
    "Search requires dedicated solutions (Elasticsearch) for large sites",
    "Performance optimization includes images, caching, CDN, and code optimization",
    "SEO combines on-page, technical, and off-page factors",
    "Security must be built-in (OWASP Top 10, input validation, HTTPS)",
  ],

  summary: `
        <h3>Chapter 3 Summary - Key Takeaways:</h3>
        <ul>
            <li><strong>Information Architecture:</strong> Organization systems, labeling, navigation, and search systems create findable content</li>
            <li><strong>CMS Evaluation:</strong> WordPress (ease), Drupal (complexity), Magento (e-commerce), Headless (API-first)</li>
            <li><strong>Database Design:</strong> SQL for structured content, NoSQL for flexibility, indexes for performance</li>
            <li><strong>Search Implementation:</strong> Full-text for smaller sites, Elasticsearch/Algolia for advanced features</li>
            <li><strong>Performance Optimization:</strong> Image optimization, caching, CDN, minification, Core Web Vitals</li>
            <li><strong>SEO Best Practices:</strong> Title tags, meta descriptions, mobile-friendliness, structured data</li>
            <li><strong>Security Essentials:</strong> Prevent SQL injection, XSS, CSRF; use HTTPS, security headers, regular updates</li>
        </ul>
    `,

  reviewQuestions: [
    {
      question:
        "Compare and contrast WordPress, Drupal, and a headless CMS for a large university website with multiple content types and user roles.",
      answer:
        "Drupal would be best due to its robust content modeling, granular permissions, and taxonomy system. WordPress might be simpler but less flexible for complex content structures. Headless CMS could work but would require custom frontend development and may lack the built-in workflow features needed for a university.",
    },
    {
      question:
        "A news website with 100,000 articles is experiencing slow search performance. Analyze the problem and recommend solutions.",
      answer:
        "Current LIKE queries are likely causing full table scans. Implement full-text search indexes first. For better results, migrate to Elasticsearch which provides relevance ranking, faceted search, and handles large volumes efficiently. Add caching for popular searches.",
    },
    {
      question:
        "Evaluate the security of a website that uses HTTP, stores passwords in MD5, and has an admin panel at /admin. What are the risks and how would you fix them?",
      answer:
        "Risks: HTTP exposes data in transit (use HTTPS). MD5 is cryptographically broken (use bcrypt). /admin is predictable (restrict by IP, add 2FA, or move to hidden path). Also implement security headers and input validation.",
    },
    {
      question:
        "A client wants to choose between Magento and Shopify for their e-commerce site with 10,000 products. Evaluate the options.",
      answer:
        "Magento offers more customization and control but requires hosting and developer expertise. Shopify is easier to manage with less technical overhead but has transaction fees and less flexibility. For 10k products, both can work; choose Magento for complete control, Shopify for faster setup and managed hosting.",
    },
    {
      question:
        "Analyze the SEO issues: duplicate titles, slow mobile speed (LCP 6s), no sitemap, and HTTP site. Prioritize fixes.",
      answer:
        "P0: HTTP to HTTPS (security and ranking). P1: Mobile speed (LCP 6s is poor, affects rankings). P1: Duplicate titles (confuses search engines). P2: XML sitemap (helps discovery but less critical than others).",
    },
  ],

  quickTips: [
    "Card sorting helps design effective information architecture",
    "WordPress powers 43% of websites - learn it!",
    "Index columns used in WHERE, JOIN, and ORDER BY",
    "Elasticsearch is the industry standard for search",
    "Lazy load images below the fold",
    "Core Web Vitals are ranking factors",
    "Use parameterized queries to prevent SQL injection",
    "HTTPS is not optional - it's required",
  ],

  commonMistakes: [
    "❌ Ignoring mobile users (not responsive)",
    "❌ Using LIKE '%term%' queries on large tables",
    "❌ Choosing CMS based on popularity, not requirements",
    "❌ Not using a CDN for static assets",
    "❌ Storing passwords in plain text or weak hashes",
    "❌ Disabling HTTPS due to cost (Let's Encrypt is free)",
    "❌ Not escaping user input (XSS, SQL injection)",
    "❌ Forgetting security headers",
  ],

  examPreparation: `
        <h3>Blueprint Alignment for Chapter 3:</h3>
        <p>This chapter has <strong>2 questions</strong> distributed as:</p>
        <ul>
            <li><strong>1 Analyze question:</strong> Analyze requirements for information-rich websites, evaluate architecture options, identify performance bottlenecks</li>
            <li><strong>1 Evaluate question:</strong> Evaluate CMS platforms, security postures, SEO strategies, and make recommendations</li>
        </ul>
        
        <h4>Analyze Level Focus:</h4>
        <ul>
            <li>Analyze information architecture needs for different content types</li>
            <li>Identify performance bottlenecks and optimization opportunities</li>
            <li>Analyze database design for content management</li>
            <li>Interpret search requirements and recommend solutions</li>
        </ul>
        
        <h4>Evaluate Level Focus:</h4>
        <ul>
            <li>Compare and evaluate CMS platforms for specific scenarios</li>
            <li>Assess security vulnerabilities and recommend fixes</li>
            <li>Evaluate SEO strategies and prioritize improvements</li>
            <li>Judge trade-offs between different technical approaches</li>
        </ul>
        
        <h4>Sample Analyze Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A content-rich website with 50,000 pages is experiencing slow page load times (average 5 seconds). Analyze the potential causes and recommend optimization strategies.</p>
            
            <p><strong>Analysis Answer:</strong></p>
            <ul>
                <li><strong>Potential Causes:</strong> Unoptimized images, no caching, database queries, render-blocking resources, no CDN</li>
                <li><strong>Recommendations:</strong>
                    <ul>
                        <li>Optimize images (compress, WebP format, lazy loading)</li>
                        <li>Implement page caching (Varnish, Redis)</li>
                        <li>Optimize database queries (add indexes, query caching)</li>
                        <li>Minify CSS/JS, defer non-critical JavaScript</li>
                        <li>Use CDN for static assets</li>
                        <li>Implement browser caching with Cache-Control headers</li>
                    </ul>
                </li>
            </ul>
        </div>
        
        <h4>Sample Evaluate Question:</h4>
        <div style="background:#f8f9fa; padding:20px; border-radius:10px; margin:20px 0;">
            <p><strong>Question:</strong> A company needs to choose a CMS for their new e-commerce site with 5,000 products, international shipping, and multiple languages. Compare WordPress + WooCommerce, Magento, and Shopify. Evaluate each option and recommend the best choice.</p>
            
            <p><strong>Evaluation Answer:</strong></p>
            <ul>
                <li><strong>WordPress + WooCommerce:</strong> Easy to use, large ecosystem, cost-effective, but may need optimization for 5k products. Good for small to medium stores.</li>
                <li><strong>Magento:</strong> Powerful, scalable, built for e-commerce, but requires hosting and developer expertise. Best for large, complex stores with custom requirements.</li>
                <li><strong>Shopify:</strong> Fully hosted, easy setup, handles scalability, but transaction fees and less customization. Good for quick launch and non-technical users.</li>
                <li><strong>Recommendation:</strong> For 5k products with international needs, Magento provides the best scalability and multi-language support if developer resources available. Shopify is better for faster time-to-market with less technical overhead. WooCommerce could work but may need optimization for performance at this scale.</li>
            </ul>
        </div>
    `,
};

console.log("✅ Chapter 3 object assigned");
