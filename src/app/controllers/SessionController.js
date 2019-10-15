import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(401).send({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return response.status(401).send({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return response.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, 'ea53f371b19f2388a3f0e286c3f1fb62', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
