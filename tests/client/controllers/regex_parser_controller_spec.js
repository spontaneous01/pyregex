// Generated by CoffeeScript 1.6.3
(function() {
  describe("RegexParserController", function() {
    beforeEach(module('pyregex'));
    return describe("$scope", function() {
      return it("should contain valid scope variables after initialization", function() {
        return inject(function($rootScope, _, $controller, RegexBuilder) {
          var $scope;
          $scope = $rootScope.$new();
          $controller('RegexParserController', {
            _: _,
            RegexResource: {},
            $scope: $scope,
            RegexBuilder: RegexBuilder
          });
          expect($scope.reFlags).toBe(void 0);
          expect($scope.re).toBe(RegexBuilder);
          expect($scope.re.matchType).toBe('match');
          expect($scope.resultTemplateUrl).toBe('/assets/templates/regex/start.html');
          expect($scope.currentResult).toEqual({
            result_type: null
          });
          expect($scope.processing).toBe(false);
          return expect($scope.re.getFlag()).toBe(0);
        });
      });
    });
  });

}).call(this);