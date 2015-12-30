
SASS              = sass
BROWSERIFY        = browserify
BROWSERIFY_FLAGS  = -t es6ify





BROWSERIFY_TGT = public/javascript/bundle.js
BROWSERIFY_SRC = public/javascript/main.js





browserify-client: $(BROWSERIFY_TGT)

$(BROWSERIFY_TGT): $(BROWSERIFY_SRC)
	$(BROWSERIFY) $(BROWSERIFY_SRC) --outfile $(BROWSERIFY_TGT)





public/css/%.css: public/sass/%.sass
	$(SASS) -C $< > $@






clean:
	-rm -rf public/css
	mkdir public/css

all: public/css/style.css




.PHONY: all
