### Ruby
推荐使用 Ruby 3.3.x（见 Dockerfile.dev 与 Gemfile），如无特殊兼容需求。
建议用 [RVM](https://rvm.io/) 安装 Ruby。
### NodeJS
推荐使用 Node.js >=20.10.0（见 package.json），建议用 [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) 安装。

### Docker
推荐使用 Docker 运行本地开发环境，镜像建议 ruby:3.3.x，Node 20.10，MySQL 8，Elasticsearch 7.17。
详细服务配置见 [searchgov-services](https://github.com/GSA/search-services)。
应用默认端口 3100。
常用命令：
```bash
$ docker compose run search-gov bash
$ bin/rails db:setup
```
Elasticsearch 推荐 7.17.x，后续建议升级至 8.x，需关注 faraday 依赖兼容。
常用检测命令：
```bash
$ curl localhost:9200
```
* [ImageMagick](https://imagemagick.org/) - 推荐用于 ActiveStorage，Paperclip 已弃用
$ brew install mysql@8
# 依赖迁移与弃用说明
- Paperclip 已弃用，建议迁移至 ActiveStorage，详见 [Rails 官方文档](https://guides.rubyonrails.org/active_storage_overview.html)。
- moment 已弃用，建议迁移至 [dayjs](https://day.js.org/) 或 [date-fns](https://date-fns.org/)。
- sass-rails 已被 [sassc-rails](https://github.com/sass/sassc-rails) 或 [cssbundling-rails](https://github.com/rails/cssbundling-rails) 取代。
- google_visualr 已不维护，建议评估是否可移除或替换。
# 依赖迁移与弃用说明
- Paperclip 已弃用，建议迁移至 ActiveStorage，详见 Rails 官方文档。
- moment 已弃用，建议迁移至 dayjs 或 date-fns，详见各库官方迁移指南。
- sass-rails 已被 sassc-rails 或 cssbundling-rails 取代，建议参考 Rails 7+ 官方推荐。
- google_visualr 已不维护，建议评估是否可移除或替换。

# 持续集成（CI）流程说明
- CI 自动运行 Ruby（RSpec）和 JS（Jest）测试。
- 自动执行 RuboCop、ESLint 静态检查。
- 自动依赖安全检查（bundle audit、npm audit）。
- 可在 .github/workflows/ci.yml 中自定义更多自动化任务。

# 开发环境搭建步骤
1. 安装 Ruby 3.3.x（推荐用 RVM）
2. 安装 Node.js >=20.10.0（推荐用 NVM）
3. 安装 MySQL 8.x、Elasticsearch 7.17.x
4. 执行 `bundle install` 和 `npm install`
5. 配置 .env 文件，管理敏感信息
6. 启动服务：`bin/rails server` 或使用 Docker

# 代码风格与规范
- Ruby 代码遵循 RuboCop 推荐规范，详见 .rubocop.yml
- JS/TS 代码遵循 ESLint 推荐规范，详见 .eslintrc.js
- 注释需覆盖复杂逻辑和关键业务流程
- 所有新功能需配套测试用例

# 常见问题 FAQ
**Q: 如何迁移 Paperclip 到 ActiveStorage？**
A: 参考 Rails 官方迁移文档，逐步替换模型和上传逻辑。

**Q: CI 检查未通过怎么办？**
A: 查看 GitHub Actions 详情，修复 RuboCop/ESLint/测试/依赖安全相关问题。

**Q: 如何升级依赖？**
A: Ruby 端用 `bundle update`，Node 端用 `npm update`，并关注安全公告。

# 项目优化建议

## 性能优化
- 数据库慢查询分析：建议定期 review log/production.log 或用 NewRelic/Datadog。
- 前端生产构建：`npm run build:prod`，自动压缩 JS/CSS。
- Ruby 端缓存：已启用 Redis 缓存。

## 安全优化
- 依赖升级：`bundle update`、`npm update`，并关注安全公告。
- 环境变量管理：敏感信息仅存储于 `.env` 或 CI/CD 环境变量。
- 输入校验与防护：Rails strong parameters、前端表单校验，默认启用 CSRF。

## 代码质量
- Ruby 静态检查：`bundle exec rubocop`
- JS 静态检查：`npm run lint`
- 测试覆盖率：`bundle exec rspec`、`npm run test:coverage`
- 统一风格，完善注释和文档。

## 依赖与主流版本说明
- Ruby 推荐 3.3.x，见 Dockerfile.dev 与 Gemfile。
- Node 推荐 >=20.10.0，见 package.json。
- Rails 推荐 7.1.x，已适配。
- Elasticsearch 推荐 7.17.x，后续建议升级至 8.x（需解决 faraday 依赖问题）。
- MySQL 推荐 8.x，已适配。
- 前端建议将 moment 替换为 dayjs 或 date-fns。
- Paperclip 已弃用，建议迁移至 ActiveStorage。
- sass-rails 已被 sassc-rails 或 cssbundling-rails 取代。
- 部分 gem（如 google_visualr）已不维护，建议评估替换或移除。

## 持续集成与自动化
- 已集成 GitHub Actions，自动运行 Ruby/JS 测试、静态检查与依赖安全检查。
- 推荐定期 review CI 结果，保持依赖安全与代码质量。
# Search-gov Info

## Code Status

 [![Build Status](https://circleci.com/gh/GSA/search-gov.svg?style=svg)](https://circleci.com/gh/GSA/search-gov)
 [![Maintainability](https://api.codeclimate.com/v1/badges/fd0577360749c9b3d166/maintainability)](https://codeclimate.com/github/GSA/search-gov/maintainability)

## Contributing to search-gov
Read our [contributing guidelines](./CONTRIBUTING.md).

## Dependencies

### Ruby

Use [RVM](https://rvm.io/) to install the version of Ruby specified in [.ruby-version](/.ruby-version). 

### NodeJS

Use [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to install the version of NodeJS specified in the [.nvmrc](/.nvmrc). 

### Docker

Docker can be used to: 1) run just the required services (MySQL, Elasticsearch, etc.) while [running the search-gov application in your local machine](https://github.com/GSA/search-gov#running-the-app), and/or 2) run the entire `search-gov` application in a Docker container.  Please refer to [searchgov-services](https://github.com/GSA/search-services) for detailed instructions on centralized configuration for the services.

When running in a Docker container (option 2 above), the `search-gov` application is configured to run on port [3100](http://localhost:3100/). Required dependencies - ([Ruby](https://github.com/GSA/search-gov#ruby), [NodeJS](https://github.com/GSA/search-gov#nodejs), [Package Manager](https://github.com/GSA/search-gov#package-manager), [Packages](https://github.com/GSA/search-gov#packages), [Gems](https://github.com/GSA/search-gov#gems), [JavaScript dependencies](https://github.com/GSA/search-gov#javascript-dependencies)) - are installed using Docker. However, other data or configuration may need to be setup manually, which can be done in the running container using `bash`.

Using bash to perform any operations on search-gov application running in Docker container, below command needs to be run in `search-services`.

    $ docker compose run search-gov bash

For example, to setup DB in Docker:

    $ docker compose run search-gov bash
    $ bin/rails db:setup

The Elasticsearch service provided by `searchgov-services` is configured to run on the default port, [9200](http://localhost:9200/). To use a different host (with or without port) or set of hosts, set the `ES_HOSTS` environment variable. For example, use following command to run the specs using Elasticsearch running on `localhost:9207`:

    ES_HOSTS=localhost:9207 bundle exec rspec spec

Verify that Elasticsearch 7.17.x is running on the expected port (port 9200 by default):

```bash
$ curl localhost:9200
{
  "name" : "002410188f61",
  "cluster_name" : "es7-docker-cluster",
  "cluster_uuid" : "l3cAhBd4Sqa3B4SkpUilPQ",
  "version" : {
    "number" : "7.17.7",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "78dcaaa8cee33438b91eca7f5c7f56a70fec9e80",
    "build_date" : "2022-10-17T15:29:54.167373105Z",
    "build_snapshot" : false,
    "lucene_version" : "8.11.1",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

### Package Manager

We recommend using [Homebrew](https://brew.sh/) for local package installation on a Mac.

### Packages

Use the package manager of your choice to install the following packages:

* C++ compiler - required by the [cld3](https://github.com/akihikodaki/cld3-ruby) gem, which we use for language detection
* Google's [protocol buffers](https://developers.google.com/protocol-buffers/) - also required by the cld3 gem
* [Java Runtime Environment](https://www.java.com/en/download/)
* [ImageMagick](https://imagemagick.org/) - required by the Paperclip gem, used for image attachments
* [MySQL client](https://github.com/brianmario/mysql2#installing) - required by the mysql2 gem
* [V8](https://v8.dev/) - required by the libv8 gem

Example of installation on Mac using [Homebrew](https://brew.sh/):

    $ brew install gcc
    $ brew install protobuf
    $ brew install java
    $ brew install imagemagick
    $ brew install mysql@5.7
    $ brew install v8
    
Example of installation on Linux:

    $ apt-get install protobuf-compiler
    $ apt-get install libprotobuf-dev
    $ apt-get install imagemagick
    $ apt-get install default-jre
    $ apt-get install default-mysql-client

### Gems

Use [Bundler](https://bundler.io/) 2.3.8 to install the required gems:

    $ gem install bundler -v 2.3.8
    $ bundle install

Refer to [the wiki](https://github.com/GSA/search-gov/wiki/Gem-Installation-gotchas-and-solutions) to troubleshoot gem installation errors.

### JavaScript dependencies

Use [Yarn](https://classic.yarnpkg.com/en/) to install the required JavaScript dependencies:

    $ npm install --global yarn
    $ yarn install

## Data

### Elasticsearch Indexes

You can create the USASearch-related indexes like this:

    $ rake usasearch:elasticsearch:create_indexes

You can index all the records from ActiveRecord-backed indexes like this:

    $ rake usasearch:elasticsearch:index_all[FeaturedCollection+BoostedContent]

If you want it to run in parallel using Resque workers, call it like this:

    $ rake usasearch:elasticsearch:resque_index_all[FeaturedCollection+BoostedContent]

Note that indexing everything uses whatever index/mapping/setting is in place. If you need to change the Elasticsearch schema first, you can 'recreate' or 'migrate' the index:

**Recreate an index (for development/test environments)**

:warning: The `recreate_index` task should only be used in development or test environments, as it deletes and then recreates the index from scratch:

    $ rake usasearch:elasticsearch:recreate_index[FeaturedCollection]

**Migrate an index (safe for production use)**

In production, if you are changing a schema and want to migrate the index without having it be unavailable while the new index is being populated, do this:

    $ rake usasearch:elasticsearch:migrate[FeaturedCollection]

Same thing, but using Resque to index in parallel:

    $ rake usasearch:elasticsearch:resque_migrate[FeaturedCollection]

### OpenSearch Migration

The application is in the process of migrating from Elasticsearch to OpenSearch. This migration is controlled by the `OPENSEARCH_APP_ENABLED` environment variable, which allows for a gradual transition between the two search engines.

When `OPENSEARCH_APP_ENABLED=false`, the application uses Elasticsearch clients.
When `OPENSEARCH_APP_ENABLED=true`, the application uses OpenSearch clients for both search indices and analytics data.

**OpenSearch is enabled by default** in local development and test environments (`.env.development` and `.env.test` have `OPENSEARCH_APP_ENABLED=true`).

**Note:** The application uses the `elasticsearch-ruby` gem to connect to OpenSearch, as it is API-compatible with OpenSearch. This avoids dependency conflicts with the `omniauth_login_dot_gov` gem.

#### Environment Variables

The following environment variables are required for OpenSearch configuration:

**Feature Flag:**
- `OPENSEARCH_APP_ENABLED` - Set to `true` to enable OpenSearch, or `false` to use Elasticsearch (default: `true` in development/test environments)

**Search Client Configuration:**
- `OPENSEARCH_SEARCH_HOST` - OpenSearch host URL (default: `http://localhost:9300`)
- `OPENSEARCH_SEARCH_USER` - OpenSearch username (default: `admin`)
- `OPENSEARCH_SEARCH_PASSWORD` - OpenSearch password
- `OPENSEARCH_LOG_LEVEL` - Log level for OpenSearch client (default: `ERROR`)
- `OPENSEARCH_CA_FINGERPRINT` - CA fingerprint for SSL verification (production only)

**Analytics Client Configuration:**
- `OPENSEARCH_ANALYTICS_HOST` - OpenSearch analytics host URL (default: `http://localhost:9300`)
- `OPENSEARCH_ANALYTICS_USER` - OpenSearch analytics username (default: `admin`)
- `OPENSEARCH_ANALYTICS_PASSWORD` - OpenSearch analytics password (default: `changeme`)
- `OPENSEARCH_ANALYTICS_LOG_LEVEL` - Log level for analytics client (default: `ERROR`)
- `OPENSEARCH_ANALYTICS_CA_FINGERPRINT` - CA fingerprint for SSL verification (production only)

#### Creating OpenSearch Indexes

When `OPENSEARCH_APP_ENABLED=true`, you can create OpenSearch indexes using the following rake tasks:

**Create all OpenSearch indexes (both OpenSearch::Indexer and ElasticBoostedContent):**

    $ rake opensearch:create_all_indexes

**Create the OpenSearch::Indexer index (for regular domains search):**

    $ rake opensearch:create_index

**Create the ElasticBoostedContent index (for best bets text):**

    $ rake opensearch:create_boosted_content_index


**Current Migration Status:**
- Spider domains indexing (OpenSearch::Indexer) is being migrated to OpenSearch
- ElasticBoostedContent index supports both Elasticsearch and OpenSearch via the `Es::CustomIndices` module
- Other custom indices (ElasticFeaturedCollection, ElasticFederalRegisterDocument, etc.) are being deprecated and will not be migrated to OpenSearch
- Analytics data (logstash indices) support both Elasticsearch and OpenSearch via the `Es::ELK` module
- The migration is controlled by the `OPENSEARCH_APP_ENABLED` flag for simplified management

### MySQL Database

Create and set up your development and test databases:

    $ rails db:setup
    $ rails db:test:prepare

# Tests

Make sure the unit tests, functional and integration tests run:
    
    # Run the RSpec tests
    $ rspec spec/
    
    # Run the Cucumber integration tests
    $ cucumber features/

    # Run the JavaScript tests
    $ yarn test

Optionally, to only run Cucumber accessibility tests:

    $ cucumber features/ --tags @a11y

The above will call the axe step defined in `features/support/hooks.rb` for any scenario tagged with the `@a11y` tag (but not `@a11y_wip` as these are expected to fail).

## Code Coverage

We require 100% code coverage. After running the tests (both RSpec & Cucumber), open `coverage/index.html` in your favorite browser to view the report. You can click around on the files that have < 100% coverage to see what lines weren't exercised.

## Circle CI

We use [CircleCI](https://circleci.com/gh/GSA/usasearch) for continuous integration. Build artifacts, such as logs, are available in the 'Artifacts' tab of each CircleCI build.


# Code Quality

We use [Rubocop](https://rubocop.org/) for static code analysis. Settings specific to i14y are configured via [.rubocop.yml](.rubocop.yml). Shared settings for all Search.gov repositories should be configured via the [searchgov_style](https://github.com/GSA/searchgov_style) gem.

### Running RuboCop Locally

Basic commands you should frequently use:

- **Generate or update the RuboCop TODO file**. Use this when RuboCop identifies many issues:
```bash
bundle exec rubocop --auto-gen-config
```
- **Autocorrect easy-to-fix offenses** (safe corrections only):
```bash
bundle exec rubocop -a
```
- **Autocorrect all possible offenses, including some more complex cases** (use with caution, review changes carefully):
```bash
bundle exec rubocop -A
```
- **Disable offenses that cannot be automatically corrected** when running autocorrections. Useful if you'd like to quickly apply auto-fixes without manually addressing harder issues immediately:
```bash
bundle exec rubocop -a --disable-uncorrectable
```

or

```bash
bundle exec rubocop -A --disable-uncorrectable
```

It is recommended to always review diff changes after running autocorrection commands to ensure code correctness and maintainability.
# Running the app
## Search

To run test searches, you will need a working Bing API key. You can request one from Bing, or ask a friendly coworker.

1. Add the Bing `BING_WEB_SUBSCRIPTION_ID` to `.env` file:
```  
BING_WEB_SUBSCRIPTION_ID: *****
```
2. Start your local development environment:
```
bin/dev
```
3. Test searches should return results:

**Web results**
* http://localhost:3000/search?affiliate=test_affiliate&query=government

**News results**
* http://localhost:3000/search?affiliate=test_affiliate&query=news
* http://localhost:3000/search/news?affiliate=test_affiliate&channel=1&query=news

**Video results**
* http://localhost:3000/search?affiliate=test_affiliate&query=video
* http://localhost:3000/search/news?affiliate=test_affiliate&channel=3&query=video

## Creating a new local admin account
[Login.gov](https://login.gov) is used for authentication.

To create a new local admin account we will need to:
1. Create an account on Login's sandbox environment.
2. Get the Login sandbox private key from a team member.
3. Add an admin user to your local app.

#### 1. Login sandbox
[Create an account](https://idp.int.identitysandbox.gov/sign_up/enter_email) on Login's sandbox environment. This will need to be a valid email address that you can get emails at. You'll receive a validation email to set a password and secondary authentication method.

#### 2. Get the Login sandbox private key
Ask your team members for the current `config/logindotgov.pem` file. This private key will let your local app complete the handshake with the Login sandbox servers. After adding the PEM file, start or restart your local Rails server.

#### 3. Add a new admin user to your local app
Open the rails console, add a new user with the matching email.
```
u = User.where(email: 'your-real-name+search-local@gsa.gov').first_or_initialize
u.assign_attributes( contact_name: 'admin',
                     first_name: 'search',
                     last_name: 'admin',
                     default_affiliate: Affiliate.find_by_name('usagov'),
                     is_affiliate: true,
                     organization_name: 'GSA',
                   )

u.approval_status = 'approved'
u.is_affiliate_admin = true
u.save!
```

You should now be able to login to your local instance of search.gov.

## Admin
Your user account should have admin privileges set. Now go here and poke around.

<http://localhost:3000/admin>

## Asynchronous tasks
Several long-running tasks have been moved to the background for processing via Resque.

1. Visit the resque-web sinatra app at <http://localhost:3000/admin/resque> to inspect queues, workers, etc.

1. In your admin center, [create a type-ahead suggestion (SAYT)](http://localhost:3000/admin/sayt_suggestions) "delete me". Now [create a SAYT filter](http://localhost:3000/admin/sayt_filters) on the word "delete".

1. Look in the Resque web queue to see the job enqueued.

1. Start a Resque worker to run the job:

   `$ QUEUE=* VERBOSE=true rake environment resque:work`

1. You should see log lines indicating that a Resque worker has processed a `ApplySaytFilters` job:

`resque-workers_1  | *** Running before_fork hooks with [(Job{primary_low} | ApplySaytFilters | [])]`

At this point, you should see the queue empty in Resque web, and the suggestion "delete me" should be gone from the [sayt_suggestions table](http://localhost:3000/admin/sayt_suggestions).

### Queue names & priorities
Each Resque job runs in the context of a queue named 'primary' with priorities assigned at job creation time using the resque-priority Gem.
We have queues named :primary_low, :primary, and :primary_high. When creating a new
background job model, consider the priorities of the existing jobs to determine where your jobs should go. Things like fetching and indexing all
Odie documents will take days, and should run as low priority. But fetching and indexing a single URL uploaded by an affiliate should be high priority.
When in doubt, just use Resque.enqueue() instead of Resque.enqueue_with_priority() to put it on the normal priority queue.

(Note: newer jobs inherit from ActiveJob, using the resque queue adapter. We are in the process of migrating the older jobs to ActiveJob.)

### Scheduled jobs
We use the [resque-scheduler](https://github.com/resque/resque-scheduler) gem to schedule delayed jobs. Use [ActiveJob](http://api.rubyonrails.org/classes/ActiveJob/Core/ClassMethods.html)'s `:wait` or `:wait_until` options to enqueue delayed jobs, or schedule them in `config/resque_schedule.yml`.

Example:

1. In the Rails console, schedule a delayed job:

    `> SitemapMonitorJob.set(wait: 5.minutes).perform_later`

1. Run the resque-scheduler rake task:

    `$ rake resque:scheduler`

1. Check the 'Delayed' tab in [Resque web](http://localhost:3000/admin/resque/delayed) to see your job.

### Additional developer resources
* [Local i14y setup](https://github.com/GSA/search-gov/wiki/Setting-up-i14y-with-usasearch-for-development)

## Production

Precompile assets
```
bin/rails assets:precompile
```
