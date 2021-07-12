import fetch from 'isomorphic-unfetch'
export default async function getTable() {
	// "sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc"
	const sortParams = false ? encodeURI("filterByFormula=AND(NOT({Name} = ''),NOT({Url} = ''))") : ''
	const viewParams = encodeURI("view=FilteredView")
	const data = await fetch(`https://api.airtable.com/v0/appnBrcBIu0cVMC5t/main?${sortParams}&${viewParams}`, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
		},
	});
	return await data.json();
}