# Use the jekyll/jekyll base image with the same version as your Jekyll requirement
FROM jekyll/jekyll:2.5

# Install the required Bundler version
RUN gem install bundler -v '~> 1.12'

# Any other setup you need
