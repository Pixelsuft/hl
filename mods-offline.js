zipMods = [
['halva_en.zip', 'Half-Life EN (214M)', 214283501],
['blue_shift_rus.zip', 'Blue Shift EN (221M)', 221191140],
['opposing_force_en.zip', 'Opposing Force EN (221M)', 221191140],
['halva_rus.zip', 'Half-Life RUS (304M)', 303881453],
['blue_shift_rus.zip', 'Blue Shift RUS (223M)', 223479923],
['opposing_force_rus.zip', 'Opposing Force RUS (224M)', 223479923]
];

pkgMods = [
];
var selectZip=document.getElementById('selectZip');
var iArgs=document.getElementById('iArgs');
selectZip.addEventListener('change', function(){
	if(selectZip.value=="halva_en.zip")
	{
		alert('Bugs: menu lagging.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="blue_shift_en.zip")
	{
		alert('Bugs: Sometimes needs noclip, because you can\'t pick armor');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="opposing_force_en.zip")
	{
		alert('Bugs: Menu lagging, doesn\'t spawn NPCs (because old xash version).');
		iArgs.value="-dev 1 -game gearbox";
	}
	else if(selectZip.value=="halva_rus.zip")
	{
		alert('Bugs: No bugs.');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="blue_shift_rus.zip")
	{
		alert('Bugs: Sometimes needs noclip, because you can\'t pick armor');
		iArgs.value="-dev 1 -game valve";
	}
	else if(selectZip.value=="opposing_force_rus.zip")
	{
		alert('Bugs: Doesn\'t spawn NPCs (because old xash version).');
		iArgs.value="-dev 1 -game valve";
	}
});