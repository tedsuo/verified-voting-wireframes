STYLES_LESS = ./less/styles_v2.less
BOOTSTRAP_LESS = ./bootstrap/less/bootstrap.less
BOOTSTRAP_RESPONSIVE_LESS = ./bootstrap/less/responsive.less
LESS_COMPRESSOR ?= `which lessc`

#
# BUILD DOCS
#

all: css
	node build

css:
	lessc ${BOOTSTRAP_LESS} > bootstrap/css/bootstrap.css
	lessc --compress ${BOOTSTRAP_LESS} > bootstrap/css/bootstrap.min.css
	lessc ${BOOTSTRAP_RESPONSIVE_LESS} > bootstrap/css/bootstrap-responsive.css
	lessc --compress ${BOOTSTRAP_RESPONSIVE_LESS} > bootstrap/css/bootstrap-responsive.min.css
	lessc ${STYLES_LESS} > css/styles_v2.css
	lessc --compress ${STYLES_LESS} > css/styles_v2.min.css

.PHONY: all css
