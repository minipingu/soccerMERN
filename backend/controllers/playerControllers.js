import mongoose from 'mongoose'
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer = async (req, res) => {
	let newPlayer = new Player(req.body)

	try {
		const player = await newPlayer.save()
		res.json(player)
	} catch (err) {
		res.send(err)
	}
}

export const getAllPlayers = async (req, res) => {
	try {
		const players = await Player.find()
		res.json(players)
	} catch (err) {
		res.send(err)
	}
}

export const getPlayerWithId = async (req, res) => {
	try {
		const player = await Player.findById(req.params.PlayerId)
		res.json(player)
	} catch (err) {
		res.send(err)
	}
}

export const updatePlayer = async (req, res) => {
	try {
		const player = await Player.findByIdAndUpdate(
			req.params.PlayerId,
			req.body,
			{ new: true }
		)
		res.json(player)
	} catch (err) {
		res.send(err)
	}
}

export const deletePlayer = async (req, res) => {
	try {
		const player = await Player.findByIdAndDelete(req.params.PlayerId)
		res.json({ message: 'Player deleted successfully' })
	} catch (err) {
		res.send(err)
	}
}
