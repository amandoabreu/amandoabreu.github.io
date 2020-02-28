# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "simples-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["aabereu"]
  spec.email         = ["amando.abreu@trivago.com"]

  spec.summary       = %q{Write a short summary, because Rubygems requires one.}
  spec.homepage      = "http://something.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.3"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 12.3"
end
