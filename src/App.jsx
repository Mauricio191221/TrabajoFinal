import React, { useState } from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { getContactList } from './services/contactService.js'
import { getMessagesByContactId } from './services/messagesService.js'
import StatusScreen from './Screens/StatusScreen/StatusScreen.jsx'
import ChannelsScreen from './Screens/ChannelsScreen/ChannelsScreen.jsx'
import CommunitiesScreen from './Screens/CommunitiesScreen/CommunitiesScreen.jsx'
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen.jsx';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<HomeScreen />}
				/>
				<Route
					path='/contacts/:contact_id/messages'
					element={<ContactScreen />}
				/>
				<Route
					path='/contacts'
					element={<ContactScreen />}
				/>
				<Route
					path='/contacts/:contact_id/detail'
					element={<ContactDetailScreen />}
				/>
				<Route
					path='/News'
					element={<StatusScreen />}
				/>
				<Route
					path='/Channels'
					element={<ChannelsScreen />}
				/>
				<Route
					path='/Communities'
					element={<CommunitiesScreen />}
				/>
				<Route
					path='/Settings'
					element={<SettingsScreen />}
				/>
			</Routes>
		</div>
	)
}

export default App