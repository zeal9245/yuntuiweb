/**

 * Created by liyang on 16/10/21.

 */

var UWillBe = function() {

    this.dns = '//wx.uwillbe.cn/ubapi/WebV1';

};

UWillBe.prototype = {

	getparams: function() {

		var url = location.search; //获取url中"?"符后的字串

		var theRequest = new Object();

		if (url.indexOf("?") != -1) {

			var str = url.substr(1);

			strs = str.split("&");

			for (var i = 0; i < strs.length; i++) {

				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);

			}
		}

		return theRequest;

	},

	getdata: function(url, _data, callback) {

		$.ajax({

			url: url,

			data: _data,

			async: false,

			dataType: "jsonp",

			success: callback,

			jsonp: 'jsoncallback',

			error: function(e) {

				console.error(e)

			}

		})

	},

	getdataAsync: function (url, _data, callback) {

	    $.ajax({

	        url: url,

	        data: _data,

	        async: true,

	        dataType: "jsonp",

	        success: callback,

	        jsonp: 'jsoncallback',

	        error: function (e) {

	            console.error(e)

	        }

	    })

	},

	postdata: function(url, _data, callback) {

		$.ajax({

			url: url,

			data: _data,

			async: false,

			dataType: "jsonp",

			type: "POST",

			success: callback,

			jsonp: 'jsoncallback',

			error: function(e) {

				console.error(e)

			}

		})

	},
    getNews: function (_data, cb) {
	    this.getdata(this.dns + '/getNews', _data, function (data) {
			cb.callback(data);
		});
	}

};