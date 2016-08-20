
 $(".text_process_button").click(function(){
		var textString = $("#final_span").val().trim();

		console.log(textString);

        $.ajax({
            url: 'https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=',

            type: 'GET', // The HTTP Method
            data: {text: textString},
            datatype: 'json',
            success: function (result) {

				console.log(result);
				console.log(result.type);
				console.log(result.score);
				$("#sentimentScorePanel").html(result.type+"= "+result.score);
				$("#sentimentScore").html(result.score);
				var barWidth= Math.abs(result.score*100)+"%";
				console.log(parseInt(barWidth));
				$('#bar').width(barWidth);
				console.log((Math.abs(result.score*100)));
				if(result.type==="negative"){
					$('#bar').addClass("progress-bar-danger");
				}

					else if(result.type==="positive"){
						$('#bar').addClass("progress-bar-success");
					}

						else {
							$('#bar').addClass("progress-bar-warning");
						};

				console.log(result.keywords["0"].word);
				console.log(result.keywords["0"].score);
				console.log(result.keywords["1"].word);
				console.log(result.keywords["1"].score);
				console.log(result.keywords["2"].word);
				console.log(result.keywords["2"].score);

				$("#word1").html(result.keywords["0"].word+"= "+result.keywords["0"].score);
				$("#word2").html(result.keywords["1"].word+"= "+result.keywords["1"].score);
				$("#word3").html(result.keywords["2"].word+"= "+result.keywords["2"].score);
				$("#word4").html(result.keywords["3"].word+"= "+result.keywords["3"].score);
				$("#word5").html(result.keywords["4"].word+"= "+result.keywords["4"].score);
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "UZcvZdpyc2mshN5Bh0clQLUDQ5PFp1IMTstjsn24rmcVxEWTqG"); // Enter here your Mashape key
            }
        });

    });



    //         $.ajax({
    //         url: 'https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=great+lovely+charming+polite+nice+amazing+grateful+patient',

    //         type: 'GET', // The HTTP Method
    //         data: {text: $("#whatever").val()}, // Additional parameters he
    //         datatype: 'json',
    //         success: function (result) {

				// console.log(result);
				// console.log(result.type);
				// console.log(result.score);
				// $("#sentimentScorePanel").html(result.type+"= "+result.score);
				// $("#sentimentScore").html(result.score);

				// console.log(result.keywords["0"].word);
				// console.log(result.keywords["0"].score);
				// console.log(result.keywords["1"].word);
				// console.log(result.keywords["1"].score);
				// console.log(result.keywords["2"].word);
				// console.log(result.keywords["2"].score);

				// $("#word1").html(result.keywords["0"].word+"= "+result.keywords["0"].score);
				// $("#word2").html(result.keywords["1"].word+"= "+result.keywords["1"].score);
				// $("#word3").html(result.keywords["2"].word+"= "+result.keywords["2"].score);
				// $("#word4").html(result.keywords["3"].word+"= "+result.keywords["3"].score);
				// $("#word5").html(result.keywords["4"].word+"= "+result.keywords["4"].score);
    //         },
    //         error: function (err) {
    //             alert(err);
    //         },
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader("X-Mashape-Authorization", "UZcvZdpyc2mshN5Bh0clQLUDQ5PFp1IMTstjsn24rmcVxEWTqG"); // Enter here your Mashape key
    //         }
    //     });
