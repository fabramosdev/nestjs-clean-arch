import { UserDataBuilder } from '@/users/domain/testinf/helpers/user-data-builder'
import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and uuid', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    }
    const id = '0196ee98-4067-760e-9057-237bdefbfee1'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to a Javascript object', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    }
    const id = '0196ee98-4067-760e-9057-237bdefbfee1'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({ id, ...props })
  })
})
