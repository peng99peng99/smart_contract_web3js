abi =[
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "validCandidate",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "votesReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidateList",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidate",
				"type": "string"
			}
		],
		"name": "voteForCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "candidateNames",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x2f4Ce89293BCd43e6aC633ba1bA6EbC6a359D66c');
candidates = {'白咖啡': 'candidate-1', '黑咖啡': 'candidate-2', '非咖啡': 'candidate-3'}

function voteForCandidate() {
  candidateName = $('#candidate').val();
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, 
    function() {

    });
}
loop=()=>{
  let candidateNames = Object.keys(candidates);
  for (let name of candidateNames) {
    let val = contractInstance.totalVotesFor.call(name,(e,result)=>{
      $(`#${candidates[name]}` ).html(result.c[0].toString());
    })
  }
  setTimeout(loop,1000);

}
loop()
