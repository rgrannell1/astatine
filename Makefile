
SASS = sass




public/css/%.css: public/sass/%.sass
	$(SASS) -C $< > $@



clean:
	-rm -rf public/css
	mkdir public/css

all: public/css/style.css




.PHONY: all
